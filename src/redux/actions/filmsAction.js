import axios from 'axios';
import {
  API_URL_DATA,
  FETCH__ERROR__FILMS,
  FETCH__FILMS,
  FETCH__START__FILMS,
} from '../../config/constants';
import { API__KEY } from '../../key';

export const recievedFilms = (films, total) => {
  return { type: FETCH__FILMS, payload: { films, total } };
};

export const fetchStartFilms = () => {
  return { type: FETCH__START__FILMS };
};

export const failLoadFilms = () => {
  return { type: FETCH__ERROR__FILMS };
};

export const fethcFilms = (search, page) => async (dispatch) => {
  dispatch(fetchStartFilms());
  try {
    const response = await axios.get(
      `${API_URL_DATA}/?s=${search}&page=${page}&type=movie&apikey=${API__KEY}`,
    );
    dispatch(
      recievedFilms(response.data.Search || [], response.data.totalResults),
    );
  } catch (err) {
    dispatch(failLoadFilms());
  }
};
