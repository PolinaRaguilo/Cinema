/* eslint-disable no-unused-vars */
import {
  FETCH__CURRENT,
  FETCH__ERROR__CURRENT,
  FETCH__ERROR__FILMS,
  FETCH__FILMS,
  FETCH__START__CURRENT,
  FETCH__START__FILMS,
} from '../../config/constants';

const initialState = {
  filmsData: [],
  isLoading: true,
  err: false,
  total: 0,
};

const Films = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH__FILMS:
      return {
        ...state,
        filmsData: payload.films,
        total: payload.total,
        isLoading: false,
        err: false,
      };
    case FETCH__START__FILMS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH__ERROR__FILMS:
      return {
        ...state,
        isLoading: false,
        err: true,
      };
    default:
      return state;
  }
};

export { Films };
