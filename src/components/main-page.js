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
  const [search, setSearch] = useState('star wars');

  const { filmsData, isLoading, total } = useSelector((state) => state.films);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethcFilms(search, currPage));
  }, []);

  const onChangeInput = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onChangePage = (e, page) => {
    setPage(page);
    dispatch(fethcFilms(search, page));
  };

  const onSearch = async () => {
    await dispatch(fethcFilms(search, 1));
  };
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Box className={classes.wrapper}>
      <form className={classes.form__search}>
        <TextField
          variant="outlined"
          placeholder="Type to search..."
          onChange={onChangeInput}
        />
        <Button className={classes.btn__search} onClick={onSearch}>
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
