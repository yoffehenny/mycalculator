import React from 'react';

import Button from "./Button"
import buttonInfo from "./buttonInfo"
import DisplayWindow from "./displayWindow"
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      displayNumber: "" 
  }
  this.handler = this.handler.bind(this)
  }
        
  handler = button =>{
    
    this.setState({
      displayNumber: this.state.displayNumber + button
        })
       console.log(button)

       if(button === "C"){
         this.reset()
       }
       else if(button === "="){
         this.calculate();
      }
     else if(button === "π"){
        this.setState({
          displayNumber: this.state.displayNumber *'3.14'
            }) 
      }
      else{
        this.setState({
          displayNumber: this.state.displayNumber + button
            })
      }
  }
  calculate =() => {
    try{
    this.setState({
      //||"" handles if just press = with nothing else wont error
      displayNumber: (eval(this.state.displayNumber)|| "")
    })
  }catch(e){
    this.setState({
      displayNumber: "error"
    })
  }

  }
  reset =()=>{
    this.setState({
      displayNumber: ""
    })
  }

  render(){ 
      const buttonComponents = 
        buttonInfo.map(item =>
          <Button key={item.id}
                  number={item}                  
                  handler={this.handler}
          />)
  return (
    <div className="body">
      <DisplayWindow 
        placeholder={this.state.displayNumber}/>
        <br/>
      {buttonComponents}
    </div>
  );
}
}

export default App;
