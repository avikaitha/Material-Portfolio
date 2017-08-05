import React, { Component } from 'react';
import AppBarComponent from './components/AppBarComponent'
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AppBarComponent />
        </div>
      </div>
    );
  }
}

export default App;
