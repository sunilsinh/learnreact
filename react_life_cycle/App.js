import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Child from './child';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hello world",
      innerWidth: window.innerWidth
    }
    console.log("parent constructor render");
  }
  // componentWillMount() {  deplricated and now you can use as initial state in state
  //   if (window.innerWidth > 500)
  //     this.setState({
  //       innerWidth: window.innerWidth
  //     })
  //   console.log("Parent component will mount render");
  // }
  componentDidMount() {
    console.log("Parent component did mount called");

  }
  checkInnerWidth() {

    if (this.state.innerWidth > 500)
      this.setState({
        innerWidth: window.innerWidth
      })
    console.log("Parent component will mount render");
  }
  changeState = () => {
    this.setState({
      name: "Name changed"
    })
  }
  componentWillReceiveProps() {
    console.log("Parent componentWillReceiveProps called");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // make the decision to render or not 
    console.log("Parent shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("parent componentWillUpdate")
  }
  componentDidUpdate(preProps, preState) {
    console.log("parent componentDidUpdate");
    console.log("parent preProps", preProps);
    console.log("parent preState", preState);
  }
  componentWillUnmount() {

    console.log("parent componentWillUnmount");
  }
  unMountChild = () => {
    this.setState({
      neme: "robert"
    })
  }
  render() {
    console.log("Parent render method called")
    if (this.state.name === "robert") {
      return (<div />)
    }
    return (
      <div className="container">
        <div className="col-md-12">
          <h2>{this.state.name}</h2>
          <p>inner Width:{this.state.innerWidth}</p>
        </div>
        <Child name={this.state.name} />
        <button onClick={this.changeState}>Change State</button>
        <button onClick={this.unMountChild}>Unmount Child</button>
      </div>
    )
  }

}
export default App;

