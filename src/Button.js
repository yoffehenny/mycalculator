import React from "react"

class Button extends React.Component{
    constructor(props){
        super(props)
    } 
      
    render(){
            if(this.props.number.name === "*"){
                return(
                <span><button className="end-button"
                    name={this.props.number.name}
                    onClick={e =>this.props.handler(e.target.name)}
                    >
                    x </button> </span> 
                )
            }
            else if(this.props.number.name === "/"){
                return(
                <span><button className="end-button"
                    name={this.props.number.name}
                    onClick={e =>this.props.handler(e.target.name)}
                    >
                    ÷ </button> </span> 
                )
            }           
            //gives equals button classname for styling
            else if(this.props.number.id == 20){
                return(
                <span><button className="equals"
                    name={this.props.number.name}
                    onClick={e =>this.props.handler(e.target.name)}
                    >
                    {(this.props.number.name)} </button> </span>
                )
            }
            //gives top row buttons classname for styling
            else if(this.props.number.id ===1 ||
                this.props.number.id ===2 ||
                this.props.number.id ===3 ||
                this.props.number.id %4 ===0 ){
            return(
                <span><button className="end-button"
                    name={this.props.number.name}
                    onClick={e =>this.props.handler(e.target.name)}
                    >
                    {(this.props.number.name)} </button> </span> 
            ) 
            }
            //gives classname for regular buttons
            else{
                return(
                    <button className="button"
                    name={this.props.number.name}
                    onClick={e =>this.props.handler(e.target.name)}
                    >
                    {(this.props.number.name)} </button>
                )
            }
            //ternary operator to styleregular buttons and end buttons
        /*return(       
            this.props.number.id %4 
                ?<button className="button"
                    name={this.props.number.name}
                    onClick={e =>this.props.handler(e.target.name)}
                    >
                    {(this.props.number.name)} </button> 
                :<span><button className="end-button"
                    name={this.props.number.name}
                    onClick={e =>this.props.handler(e.target.name)}
                    >
                    {(this.props.number.name)} </button> <br/> </span>
        )*/
        }
}

export default Button