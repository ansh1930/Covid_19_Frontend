import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Card} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // width:330,
    // height:330,
    marginTop:10,
    marginLeft:5,
    marginRight:5,
  },
  img:{
      paddingBottom:30,
      bottom:20,
      top:20,
      objectFit:'contain',
      overflow:'visible'
  }
});

export default function Homepageassest(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          height="204px"
          width='210px'
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}