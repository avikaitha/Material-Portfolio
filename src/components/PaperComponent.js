import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet(theme => ({
  root: theme.mixins.gutters({
    paddingTop: 64,
    paddingBottom: 16,
    width: '100%',
  }),
  paper: theme.mixins.gutters({
    paddingTop: 0,
    paddingBottom: 0,
    height: '400px',
    backgroundColor: '#DD2C00',
  })
}));

function PaperSheet(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Typography type="headline" component="h3">
          Avinash Reddy Kaitha
        </Typography>
        <Typography type="body1" component="p">
          Hi!
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PaperSheet);
