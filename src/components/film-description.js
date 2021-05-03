import {
  Box,
  Button,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

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
        <Button className={classes.btn}>Buy a ticket</Button>
      </Box>
    </Box>
  );
};

export default FilmDescription;
