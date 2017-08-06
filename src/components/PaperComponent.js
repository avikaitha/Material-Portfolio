import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet(theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: 'auto',


  }),
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: '400px',

  })
}));

function PaperSheet(props) {
  const classes = props.classes;
  return (

      <Paper className={classes.paper} elevation={4}>
        <Typography type="headline" component="h3">
          Project Details
        </Typography>
        <Typography type="body1" component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>

  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PaperSheet);
