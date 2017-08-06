import React, { Component } from 'react';
import AppBarComponent from './components/AppBarComponent'
import PaperSheet from './components/PaperComponent';

const styles ={
  row: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  firstRow: {
    paddingTop: 86,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  }
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AppBarComponent />
          <div className="row" style={styles.firstRow}>
            <div className="col-sm-8">
              <PaperSheet />
            </div>
            <div className="col-sm-4">
              <PaperSheet />
            </div>
          </div>

          <div className="row" style={styles.row}>
            <div className="col-sm-4">
              <PaperSheet />
            </div>
            <div className="col-sm-4">
              <PaperSheet />
            </div>
            <div className="col-sm-4">
              <PaperSheet />
            </div>
          </div>

          <div className="row" style={styles.row}>
            <div className="col-sm-4">
              <PaperSheet />
            </div>
            <div className="col-sm-4">
              <PaperSheet />
            </div>
            <div className="col-sm-4">
              <PaperSheet />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
