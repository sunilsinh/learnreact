import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">

          <nav className="navbar navbar-light bg-light">
            <span className="navbar-text">
              React Life Cycle
          </span>
          </nav>
          <nav className="navbar navbar-light bg-light">
            <strong className="navbar-text">
              There are four phase for life cycle which is very important.
              <ul>
                <li>
                  <strong>Mounting</strong>
                  <p>When instance of component has beend created and inserted into DOM.</p>
                </li>
                <li>
                  <strong>Updating</strong>
                  <p>When component is re-rendered as result of changes either its props or state.</p>
                </li>
                <li>
                  <strong>Unmounting</strong>
                  <p>When component is being removed from the DOM</p>
                </li>
                <li>
                  <strong>Error Handling</strong>
                  <p>When there is error during re-rendering of life cycle method or the constructor of any child component</p>
                </li>
              </ul>
            </strong>
          </nav>
          <nav className="navbar navbar-light bg-light">
            <strong className="navbar-text">
              All four phases (Mounting, Unmounting, removing and error handling) has there own methods.
              <ul>
                <li>
                  <strong>Mounting</strong>
                  <ul>
                    <li>constructor</li>
                    <li>getDerivedStateFromProps</li>
                    <li>render</li>
                    <li>componentDidMount</li>
                  </ul>
                </li>
                <li>
                  <strong>Updating</strong>
                  <ul>
                    <li>static getDerivedStateFromProps</li>
                    <li>shouldComponentUpdate</li>
                    <li>render</li>
                    <li>getSnapShotBeforeUpdate</li>
                    <li>componentDidUpdate</li>
                  </ul>
                </li>
                <li>
                  <strong>Unmounting</strong>
                  <ul>
                    <li>
                      componentWillUnmount
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Error Handling</strong>
                  <ul>
                    <li>
                      static getDerivedStateFromError
                    </li>
                    <li>
                      componentDidCatch
                    </li>
                  </ul>
                </li>
              </ul>
            </strong>
          </nav>
          <div className="jumbotron">
            <h1 className="lp_hglt_cls_navbar_example">Here we learn all life Cycle</h1>
            <p>
              <strong>componentWillMount--</strong>
              Immediately before rendering.
            </p>
            <p>
              <strong>componentDidMount--</strong>
              Immediately after rendering.
            </p>
            <p>
              <strong>componentWillRecieveProps--</strong>
              When component recieve new props
            </p>
            <p>
              <strong>shouldComponentUpdate--</strong>
              before rendering after recieve new props or state
            </p>
            <p>
              <strong>componentWillUpdate--</strong>
              before rendering, after recieve new props or state
            </p>
            <p>
              <strong>componentDidUpdate--</strong>
              after component's updates are flushed to DOM
            </p>
            <p>
              <strong>componentWillUnmount--</strong>
              Immediately before removing component from DOM
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Intro;