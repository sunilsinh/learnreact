import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Child extends Component {
  constructor() {
    super();

    console.log("child constructor");
  }
  componentWillMount() {

    console.log("Child component will mount render second");
  }
  componentDidMount() {
    console.log("Child component did mount called")
  }
  componentWillReceiveProps() {
    console.log("Child componentWillReceiveProps called")
  }
  shouldComponentUpdate(nextProps, nextState) {
    // make the decision to render or not 
    console.log("Child shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(preProps, preState) {
    console.log("child componentDidUpdate");
    console.log("child preProps", preProps);
    console.log("child preState", preState);
  }
  componentWillUnmount() {

    console.log("child componentWillUnmount");
  }
  render() {
    console.log("Child render method called")
    return (
      <div className="App">
        <h2>Child Component</h2>
        <p>Child name:{this.props.name}</p>
      </div>
    )
  }

}
export default Child;

