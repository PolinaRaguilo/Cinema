import {
  Box,
  Button,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  wrapper: {
    width: 840,
    minHeight: 840,
    backgroundColor: '#2B2243',
    marginTop: 24,
    margin: '0px auto',
    padding: '32px 24px 26px',
  },
  media__wrapper: {
    position: 'relative',
    width: 788,
    height: 280,
  },
  poster: {
    backgroundColor: '#C4C4C4',
    height: '100%',
  },
  film__title: {
    position: 'absolute',
    bottom: 0,
    left: 24,
    top: 16,
    width: 454,
    height: 57,
    backgroundColor: 'rgba(43, 34, 67, 0.1)',
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    padding: '7px 16px 8px 10px',
  },
  rating: {
    position: 'absolute',
    width: 115,
    height: 57,
    bottom: 16,
    right: 24,
    fontSize: 14,
    backgroundColor: 'rgba(43, 34, 67, 0.1)',
    padding: '9px 5px 0px 9px',
    color: '#000000',
  },
  btn: {
    position: 'absolute',
    top: 16,
    right: 24,
    width: 140,
    height: 50,
  },
  inner__wrapper: {
    display: 'flex',
  },
  photo__wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 26,
    marginLeft: 20,
  },
  single__poster: {
    width: 180,
    height: 225,
    backgroundColor: '#C4C4C4',
    '&:nth-child(odd)': {
      marginRight: 24,
    },
  },
  information: {
    width: 390,
    marginTop: 15,
  },
  information__box: {
    width: 365,
    minHeight: 350,
    backgroundColor: '#000000',
    padding: '16px 24px',
    '& > p': {
      fontSize: 14,
      marginBottom: 8,
    },
    '& > p:first-child': {
      marginBottom: 20,
    },
  },
  description: {
    fontSize: 14,
    '&:first-child': {
      marginBottom: 15,
    },
    '&:nth-child(2)': {
      marginBottom: 27,
      width: 385,
    },
  },
});

const FilmDescription = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.media__wrapper}>
        <CardMedia className={classes.poster} />
        <Typography className={classes.film__title}>Film name</Typography>
        <Typography className={classes.rating}>
          Metascore: 12 Imdb rating: 12
        </Typography>
        <Link to="/reserve/:id">
          <Button className={classes.btn}>Buy a ticket</Button>
        </Link>
      </Box>
      <Box className={classes.inner__wrapper}>
        <Box className={classes.information}>
          <Typography className={classes.description}>Description:</Typography>
          <Typography className={classes.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Expedita, labore. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Expedita, labore.
          </Typography>
          <Box className={classes.information__box}>
            <Typography>Info box</Typography>

            <Typography>Country: dfsdf</Typography>
            <Typography>Awards: dfsdf</Typography>
            <Typography>Country: 1589</Typography>
            <Typography>Actors: fsdf</Typography>
            <Typography>Year: 1589</Typography>
            <Typography>Director: fsdf</Typography>
            <Typography>Genre: fsdfsf</Typography>
            <Typography>Language: dgdfgfg</Typography>
            <Typography>Box office: dfsdf</Typography>
            <Typography>Released: 1589</Typography>
          </Box>
        </Box>
        <Box className={classes.photo__wrapper}>
          <CardMedia className={classes.single__poster} />
          <CardMedia className={classes.single__poster} />
          <CardMedia className={classes.single__poster} />
          <CardMedia className={classes.single__poster} />
        </Box>
      </Box>
    </Box>
  );
};

export default FilmDescription;
