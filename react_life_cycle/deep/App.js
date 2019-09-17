import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  // Mounting
  constructor(props) {
    super(props);
    this.state = {
      points: 10,
      addedPoints: []
    }
  }

  // static getDerivedStateFromProps(props, state) { // to overrider props and when you will use this setState will not work because always override state value by this
  //   console.log("parent Mounting getDerivedStateFromProps");
  //   console.log("previous props" + JSON.stringify(props));
  //   console.log("previous state" + JSON.stringify(state));
  //   return {
  //     points: 1000
  //   }
  // }

  componentDidMount() {
    console.log("Parent Mounting componentDidMount")
  }
  incrementPoints = () => {
    const newPoints = [...this.state.addedPoints]
    console.log(newPoints);
    newPoints.push(this.state.points);
    this.setState({
      points: this.state.points + 1,
      addedPoints: newPoints
    });

  }

  // Updating
  static getDerivedStateFromProps(props, state) {
    console.log("Parent Updating getDerivedStateFromProps");
    console.log("previous props" + JSON.stringify(props));
    console.log("previous state" + JSON.stringify(state));
    return {}
  }

  shouldComponentUpdate() { // it will give the decision that updated data will render or not based on boolean value
    console.log("parent Updating shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Parent Updating getSnapshotBeforeUpdate called");
    console.log("previous prevProps" + JSON.stringify(prevProps));
    console.log("previous prevState" + JSON.stringify(prevState));
    if (this.state.points > prevState.points) {
      console.log("poits incremented");
      return "welcome";
    }
    return this.state.points || null // where 'value' is a  valid JavaScript value    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent Updating componentDidUpdate called");
    console.log("previous prevProps" + JSON.stringify(prevProps));
    console.log("previous prevState" + JSON.stringify(prevState));
    if (snapshot !== null) {
      console.log("snapshot not null")
    }
  }

  removeData(j) {

    const newStateArray = [...this.state.addedPoints]

    newStateArray.filter((val, key, array) => {
      if (key === j) {
        newStateArray.splice(key, 1)
      }
      return newStateArray;
    });
    this.setState(() => {
      return {
        addedPoints: newStateArray
      };
    });
  }
  componentWillUnmount() {
    if (this.state.addedPoints.length < 2) {
      console.warn("Parent componentWillUnmount called");
    }

  }

  render() {
    const finalData = this.state.addedPoints.map((data, i) => {
      return <li key={i} keys={i} onClick={() => this.removeData(i)}>{data}</li>;
    });
    return (
      <div className="container">
        <div className="col-md-12">
          <h2>Hello world</h2>
          <p><strong>{this.state.points}</strong></p>
          <button className="btn btn-primary" onClick={this.incrementPoints}>Increment</button>
          <ul>{finalData}</ul>

        </div>
      </div>
    )
  }
}
export default App;