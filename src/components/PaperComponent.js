import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const styleSheet = createStyleSheet(theme => ({
  root: theme.mixins.gutters({
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
  }),
  paper: theme.mixins.gutters({
    paddingTop: 0,
    paddingBottom: 0,
    height: '400px',
    backgroundColor: '#DD2C00',
  }),
  typo: theme.mixins.gutters({
    paddingTop: 150,
    color: "#FFFFFF",
  }),
}));

const typo_style = {
  margin: "auto",
  width: "50%",
  fontFamily: 'Roboto',
  fontWeight: 100,
  fontSize: 50,
  textAlign: 'center',
}

function PaperSheet(props) {
  const classes = props.classes;
  return (
    <div className={classes.root} style={{paddingLeft: 0, paddingRight: 0}}>
      <Paper className={classes.paper} elevation={0}>
        <Typist>
          <Typography className={classes.typo} type="headline" style={typo_style} component="h3">
            HI!, I am Avinash
          </Typography>
        </Typist>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PaperSheet);

// <Typography type="body1" component="p">
//   Hi!
// </Typography>
