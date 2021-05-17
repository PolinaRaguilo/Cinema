import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fethcFilms } from '../redux/actions/filmsAction';
import FilmCard from './film-card';

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
  no__results: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}));

const MainPage = () => {
  const classes = useStyles();

  const [currPage, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { filmsData, isLoading, total } = useSelector((state) => state.films);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethcFilms('star wars', currPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeInput = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onChangePage = (e, page) => {
    setPage(page);
    dispatch(fethcFilms(search, page));
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      dispatch(fethcFilms(search.trim(), 1));
      setSearch('');
    }
  };
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Box className={classes.wrapper}>
      <form className={classes.form__search} onSubmit={onSearch}>
        <TextField
          variant="outlined"
          placeholder="Type to search..."
          onChange={onChangeInput}
        />
        <Button className={classes.btn__search} type="submit">
          Search
        </Button>
      </form>
      {filmsData.length === 0 ? (
        <Typography className={classes.no__results}>
          Nothing found <br />
          Please try another one
        </Typography>
      ) : (
        <>
          {filmsData.map((item) => {
            const { imdbID } = item;
            return <FilmCard id={imdbID} key={imdbID} />;
          })}
          <Pagination
            page={currPage}
            onChange={(e, page) => onChangePage(e, page)}
            count={Math.ceil(total / 10)}
          />
        </>
      )}
    </Box>
  );
};

export default MainPage;
