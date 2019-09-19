import React, { Component } from 'react';
import { connect } from 'react-redux'
class Home extends Component {
    render() {
        return (
            <div>

                <h2>Welcome to React Learning Phase</h2>
                <span>Reducer data {JSON.stringify(this.props.formData)}</span>
            </div>
        )
    }
}
const mapStoreToProps = (state) => {
    return state;
}
export default connect(
    mapStoreToProps,
    null
)(Home);
//export default Home;