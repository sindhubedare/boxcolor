import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './MyButton';

const blue = 	'#0000FF';
const orange =  '#FF4500';
//defining the colors by their HEX code
//https://www.rapidtables.com/web/color/RGB_Color.html

export default class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state= {color: blue, value: 0 };
        this.changeColor= this.changeColor.bind(this);
    }
    changeColor(){
        const newColor = this.state.color == blue ? orange : blue;
        this.setState({color: newColor})
        this.setState({value: this.state.value+1})
    }
 render(){
     return(
        
         <div className="box" style={{background: this.state.color}}>
             <h1>I can Change color on click</h1>
             <div className="click">Number of times clicked to change color: {this.state.value}</div>     
              <button onClick={this.changeColor}>Click</button>
         </div>
     )
 }
  
}
ReactDOM.render(<Toggle />, document.getElementById('root'))


//reference: https://www.digitalocean.com/community/tutorials/how-to-build-a-custom-toggle-switch-with-react
//https://upmostly.com/tutorials/changing-the-background-color-in-react
//to toggle the box with changing color: https://stackblitz.com/edit/react-toggle-color?file=index.js
//to count the number of clicks: https://codepen.io/trnkat96/pen/KqPOoX
//to add fonts from google fonts:S https://stackoverflow.com/questions/40769551/how-to-use-google-fonts-in-react-js