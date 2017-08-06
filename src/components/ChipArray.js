import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import deepOrange from 'material-ui/colors/deepOrange';

const styleSheet = createStyleSheet(theme => ({
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: deepOrange[800],
    color: "#FFFFFF",

  },
  row: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
  },
  avatar: {
    backgroundColor: deepOrange[500]
  }
}));

class ChipsArray extends Component {
  state = {
    chipData: [
      { key: 'ML', label: 'Machine Learning' },
      { key: 'DV', label: 'Data Visualization' },
      { key: 'K', label: 'Keras' },
    ],
  };

  styles = {
    chip: {
      margin: 4,
      color: "#FFFF00"
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

  // handleRequestDelete = data => () => {
  //   if (data.label === 'ReactJS') {
  //     alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
  //     return;
  //   }
  //
  //   const chipData = [...this.state.chipData];
  //   const chipToDelete = chipData.indexOf(data);
  //   chipData.splice(chipToDelete, 1);
  //   this.setState({ chipData });
  // };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.row}>
        {this.state.chipData.map(data => {
          return (
            <Chip
                className = {classes.chip}
                avatar={<Avatar className = {classes.avatar}>{data.key}</Avatar>}
                label={data.label}
              />
          );
        })}
      </div>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ChipsArray);
