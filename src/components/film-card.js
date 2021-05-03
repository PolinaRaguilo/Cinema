import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card__film: {
    display: 'flex',
    backgroundColor: '#2B2243',
    height: 274,
    borderRadius: 5,
    padding: 24,
    marginBottom: 32,
  },
  poster: {
    backgroundColor: '#C4C4C4',
    height: 226,
    width: 180,
  },
  description: {
    padding: 0,
    marginLeft: 24,
    width: 460,
  },
  film__title: {
    fontSize: 24,
    marginBottom: 16,
  },
  description__text: {
    fontSize: 14,
    marginBottom: 15,
  },
  tags__wrapper: {
    display: 'flex',
    marginBottom: 20,
  },
  tag: {
    width: 35,
    height: 25,
    background: '#000000',
    fontSize: 10,
    borderRadius: 5,
    padding: '5px 8px 6px 10px',
    marginRight: 14,
    '&:last-child': {
      marginRight: 0,
    },
  },
  button__more: {
    backgroundColor: '#000000',
    padding: '15px 19px',
    width: 140,
    height: 50,
    marginTop: 50,
    fontSize: 14,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: '#000000',
      border: '3px solid #FFFFFF',
      color: '#FFFFFF',
    },
    '& a': {
      textDecoration: 'none',
      color: '#FFFFFF',
    },
  },
});

const FilmCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card__film}>
      <CardMedia className={classes.poster} />
      <CardContent className={classes.description}>
        <Typography className={classes.film__title}>Film name</Typography>
        <Typography className={classes.description__text}>
          actor, actor
        </Typography>
        <Typography className={classes.description__text}>
          Description
        </Typography>
      </CardContent>
      <Box>
        <Box className={classes.tags__wrapper}>
          <Typography className={classes.tag}>tag</Typography>
          <Typography className={classes.tag}>tag</Typography>
          <Typography className={classes.tag}>tag</Typography>
        </Box>
        <Typography className={classes.description__text}>year</Typography>
        <Typography className={classes.description__text}>runtime</Typography>
        <Button className={classes.button__more}>
          <Link to="/movie/:id">More info...</Link>
        </Button>
      </Box>
    </Card>
  );
};

export default FilmCard;
