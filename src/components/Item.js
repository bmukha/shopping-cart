import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Item(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={props.id}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          {/*<Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>*/}
          <Typography gutterBottom variant="h5" component="h2">
            ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
