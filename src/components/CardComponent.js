import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import reptileImage from '../images/test.jpg';
import ChipArray from './ChipArray';

const styleSheet = createStyleSheet({
  card: {

  },
  image: {
    maxHeight:'100%',
    maxWidth:'100%',
  },
  chip: {
    // margin: theme.spacing.unit,

  }
});

function CardComponent(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia>
          <img src={reptileImage} alt="Contemplative Reptile" className={classes.image}/>
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            {props.headLine}
          </Typography>
          <Typography component="p">
            {props.content}
          </Typography>
          <ChipArray />
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Github
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CardComponent);

// <Chip
//     avatar={<Avatar className={classes.avatar}>ML</Avatar>}
//     label="Machine Learning"
//     className={classes.chip}
//   />
