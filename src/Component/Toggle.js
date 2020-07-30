import React from 'react';
import ReactDOM from 'react-dom';

const blue = 	'#0000FF';
const orange =  '#FF4500';
//defining the colors by their HEX code

export default class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state= {color: blue};
        this.changeColor= this.changeColor.bind(this);
    }
    changeColor(){
        const newColor = this.state.color == blue ? orange : blue;
        this.setState({color: newColor})
    }
 render(){
     return(
         <div style={{background: this.state.color}}>
          <h1>I can Change color on click</h1>
       
         <button onClick={this.changeColor}>Click</button>
         </div>
     )
 }
  
}
ReactDOM.render(<Toggle />, document.getElementById('root'))