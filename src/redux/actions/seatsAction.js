import {
  ADD_INFORMATION,
  ADD_MOVIE,
  CHECKED_DELETE,
  CHECKED_SEAT,
} from '../../config/constants';

export const setChecked = (filmId, singleSeat) => {
  return {
    type: CHECKED_SEAT,
    payload: { filmId, singleSeat },
  };
};

export const deleteChecked = (filmId, singleSeat) => {
  return {
    type: CHECKED_DELETE,
    payload: { filmId, singleSeat },
  };
};

export const addMovie = (id, title) => {
  return {
    type: ADD_MOVIE,
    payload: { id, title },
  };
};

export const addInformation = (filmId, cost, amountSeats) => {
  return {
    type: ADD_INFORMATION,
    payload: { filmId, cost, amountSeats },
  };
};
