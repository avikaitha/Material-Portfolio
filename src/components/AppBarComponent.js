import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {orange} from 'material-ui/colors';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet({
  root: {
    marginTop: 0,
    width: '100%',

  },
  flex: {
    flex: 1,
  },
  appBar: {
    background: '#EF6C00'
  }
});

function AppBarComponent(props) {

  const classes = props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>
              Avinash Reddy Kaitha
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );


}

AppBarComponent.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styleSheet)(AppBarComponent);
