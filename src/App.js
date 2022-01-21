import React, { Component } from 'react';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';

class App extends Component {
  state = { lat: null, errMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errMessage) {
      return <h1>Error = {this.state.errMessage}</h1>;
    }

    return <Spinner message='Please accept location request!' />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
