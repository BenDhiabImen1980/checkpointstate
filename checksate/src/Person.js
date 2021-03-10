// import photo from './image.jpg';
import './App.css';

import React, { Component } from 'react'

 class Person extends Component{
     constructor(props){
         super (props)
         this.state={
            counter: 0,
         }
     }
   
    componentDidMount=()=>{
        setInterval(()=>{this.setState({counter:this.state.counter+1})},1000)
    }
    render() {
         return (
        <div className='App-header'>
            <p>{this.state.counter}</p>
            <h1>😊 {this.props.data.fullName}</h1>
            <h1>{this.props.data.bio}</h1>
            <h1> {this.props.data.profession} </h1>
            <img style={{width:'200px'}} src={this.props.data.imgSrc} alt=""></img>
        </div>
        )
    }
}

export default Person