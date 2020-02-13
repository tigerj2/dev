import React from 'react'
import { Component } from 'react'


const divStyle = {
  width: '100%',
  height: '1000px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover' 
}
class Background extends Component{
    render(){
        return (
            <div className="cComponent" style={divStyle} >
              <h1 align="center">Some header example</h1>
            </div>
          );
    }
        
}

export default Background