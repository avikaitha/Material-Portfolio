import React, { Component } from 'react';
import AppBarComponent from './components/AppBarComponent'
import PaperSheet from './components/PaperComponent';
import CardComponent from './components/CardComponent';

const styles ={
  row: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  firstRow: {
    paddingTop: 16,
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
          <PaperSheet square={true}/>
          <div className="row" style={styles.firstRow}>
            <div className="col-sm-8">
              <CardComponent headLine="Project1" content="Some Content"/>
            </div>
            <div className="col-sm-4">
            <CardComponent headLine="Project2" content="Some Content"/>
            </div>
          </div>

          <div className="row" style={styles.row}>
            <div className="col-sm-4">
            <CardComponent headLine="Project3" content="Some Content"/>
            </div>
            <div className="col-sm-4">
              <CardComponent headLine="Project4" content="Some Content"/>
            </div>
            <div className="col-sm-4">
              <CardComponent headLine="Project5" content="Some Content"/>
            </div>
          </div>

          <div className="row" style={styles.row}>
            <div className="col-sm-4">
              <CardComponent headLine="Project6" content="Some Content"/>
            </div>
            <div className="col-sm-4">
              <CardComponent headLine="Project7" content="Some Content"/>
            </div>
            <div className="col-sm-4">
              <CardComponent headLine="Project8" content="Some Content"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
