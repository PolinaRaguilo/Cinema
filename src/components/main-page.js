import { Pagination } from '@material-ui/lab';
import { useState } from 'react';
import { API_URL_DATA } from '../config/constants';
import useFilms from '../hooks/useFilms';
import { API__KEY } from '../key';

const { Box, TextField, Button, makeStyles } = require('@material-ui/core');
const { default: FilmCard } = require('./film-card');

const useStyles = makeStyles(() => ({
  wrapper: {
    width: 840,
    margin: '0px auto',
    marginTop: 80,
  },
  btn__search: {
    width: 168,
    height: 85,
    fontSize: 24,
    borderRadius: 5,
  },

  form__search: {
    display: 'flex',
    marginBottom: 48,
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const [currPage, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const { films, total } = useFilms(
    `${API_URL_DATA}/?s=star wars&page=${currPage}&type=movie&apikey=${API__KEY}`,
  );

  const onChangePage = (e, page) => {
    setPage(page);
  };

  return (
    <Box className={classes.wrapper}>
      <form className={classes.form__search}>
        <TextField variant="outlined" placeholder="Type to search..." />
        <Button className={classes.btn__search}>Search</Button>
      </form>
      {films.map((item) => {
        const { Title, Poster, Year, imdbID } = item;
        return (
          <FilmCard key={imdbID} title={Title} poster={Poster} year={Year} />
        );
      })}
      <Pagination
        onChange={(e, page) => onChangePage(e, page)}
        count={Math.ceil(total / 10)}
      />
    </Box>
  );
};

export default MainPage;
