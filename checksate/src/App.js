// import photo from './image.jpg';
import "./App.css";
import React, { Component } from "react";
import Person from "./Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Mr Ali",
        bio: "aaa",
        imgSrc: "./image.jpg",
        profession: "Developpeur",
        
      },
      show: true,
    };
  }

  toggleShow=()=> {
    this.setState({...this.state,show: !this.state.show,});
  }
  render() {
    return (
      <div className="App-header">
        {this.state.show ? <Person data={this.state.Person} /> : null}
        <button onClick={this.toggleShow}>{this.state.show ? "Hide":"Show"}</button>
      </div>
    );
  }
}
export default App;
