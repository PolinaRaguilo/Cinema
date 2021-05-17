import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { API_URL_DATA } from '../config/constants';
import { API__KEY } from '../key';
import { addMovie } from '../redux/actions/seatsAction';

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
    width: 515,
    height: 75,
    backgroundColor: 'rgba(43, 34, 67, 0.1)',
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    padding: '7px 16px 8px 10px',
  },
  rating: {
    position: 'absolute',
    width: 140,
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
  const { id } = useParams();

  const [current, setCurrent] = useState(null);

  const dispatch = useDispatch();

  const onAddHandler = () => {
    dispatch(addMovie(id, current.Title));
  };

  const getCurrent = async () => {
    try {
      const response = await axios.get(
        `${API_URL_DATA}/?apikey=${API__KEY}&i=${id}`,
      );
      await setCurrent(response.data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  useEffect(() => {
    getCurrent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (current === null) {
    return <CircularProgress />;
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.media__wrapper}>
        <CardMedia className={classes.poster} />
        <Typography className={classes.film__title}>{current.Title}</Typography>

        <Typography className={classes.rating}>
          Metascore: {current.Metascore} Imdb rating: {current.imdbRating}
        </Typography>

        <Link to={`/reserve/${id}`}>
          <Button className={classes.btn} onClick={onAddHandler}>
            Buy a ticket
          </Button>
        </Link>
      </Box>
      <Box className={classes.inner__wrapper}>
        <Box className={classes.information}>
          <Typography className={classes.description}>Description:</Typography>
          <Typography className={classes.description}>
            {current.Plot}
          </Typography>
          <Box className={classes.information__box}>
            <Typography>Info box</Typography>

            <Typography>Country: {current.Country}</Typography>
            <Typography>Awards: {current.Awards}</Typography>
            <Typography>Actors: {current.Actors}</Typography>
            <Typography>Year: {current.Year}</Typography>
            <Typography>Director: {current.Director}</Typography>
            <Typography>Genre: {current.Genre}</Typography>
            <Typography>Language: {current.Language}</Typography>
            <Typography>Box office: {current.BoxOffice}</Typography>
            <Typography>Released: {current.Released}</Typography>
          </Box>
        </Box>
        <Box className={classes.photo__wrapper}>
          <CardMedia
            className={classes.single__poster}
            image={current.Poster}
          />
          <CardMedia
            className={classes.single__poster}
            image={current.Poster}
          />
          <CardMedia
            className={classes.single__poster}
            image={current.Poster}
          />
          <CardMedia
            className={classes.single__poster}
            image={current.Poster}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FilmDescription;
