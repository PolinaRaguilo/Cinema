import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL_DATA } from '../config/constants';
import { API__KEY } from '../key';

const useStyles = makeStyles({
  card__film: {
    display: 'flex',
    position: 'relative',
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
    '& p:nth-child(3)': {
      width: 390,
    },
    '& p:nth-child(1)': {
      // width: 350,
    },
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
    width: 210,
    justifyContent: 'flex-end',
    '&~p': {
      textAlign: 'right',
    },
  },
  tags__more: {
    flexWrap: 'wrap',
  },
  tag: {
    minWidth: 50,
    height: 25,
    background: '#000000',
    fontSize: 10,
    borderRadius: 5,
    padding: '5px 8px 6px 10px',
    marginRight: 10,
    '&:nth-child(n+4)': {
      marginTop: 7,
    },
  },
  button__more: {
    backgroundColor: '#000000',
    padding: '15px 19px',
    width: 140,
    height: 50,
    position: 'absolute',
    bottom: 24,
    right: 24,
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

const FilmCard = (props) => {
  const classes = useStyles();

  const { id } = props;

  const [current, setCurrent] = useState(null);

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
    return null;
  }

  return (
    <Card className={classes.card__film}>
      <CardMedia
        className={classes.poster}
        image={
          current.Poster === 'N/A'
            ? 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            : current.Poster
        }
      />
      <CardContent className={classes.description}>
        <Typography className={classes.film__title}>{current.Title}</Typography>
        <Typography className={classes.description__text}>
          {current.Actors}
        </Typography>
        <Typography className={classes.description__text}>
          {current.Plot}
        </Typography>
      </CardContent>
      <Box>
        <Box
          className={`${classes.tags__wrapper} ${
            current.Genre.split(',').length > 3 ? `${classes.tags__more}` : ' '
          }`}
        >
          {current.Genre.split(',').map((item, i) => {
            return (
              <Typography key={i} className={classes.tag}>
                {item}
              </Typography>
            );
          })}
        </Box>
        <Typography className={classes.description__text}>
          {current.Year} year
        </Typography>
        <Typography className={classes.description__text}>
          {current.Runtime}
        </Typography>
        <Button className={classes.button__more}>
          <Link to={`/movie/${id}`}>More info...</Link>
        </Button>
      </Box>
    </Card>
  );
};

export default FilmCard;
