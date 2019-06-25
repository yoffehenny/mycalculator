import React from "react"


class DisplayWindow extends React.Component{
    constructor(){
        super()       
    }
    render(){
        return(
            <div>
                <input 
                    className="displayWindow"
                    type="text"
                    placeholder={this.props.placeholder}
                    />    
            </div>
        )
    }
}
export default DisplayWindow