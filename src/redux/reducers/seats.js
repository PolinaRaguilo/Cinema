import {
  ADD_INFORMATION,
  ADD_MOVIE,
  ADD_TO_RESERVE,
  CHECKED_DELETE,
  CHECKED_SEAT,
} from '../../config/constants';

const initialState = [];

const Seats = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHECKED_SEAT:
      return [
        ...state.map((item) => {
          if (item.id === payload.filmId) {
            return {
              ...item,
              checked: [...item.checked, payload.singleSeat],
            };
          }
          return item;
        }),
      ];

    case CHECKED_DELETE:
      return [
        ...state.map((item) => {
          if (item.id === payload.filmId) {
            return {
              ...item,
              checked: item.checked.filter(
                (item) => item !== payload.singleSeat,
              ),
            };
          }
          return item;
        }),
      ];

    case ADD_MOVIE:
      if (state.some((item) => item.id === payload.id) === false) {
        return [
          ...state,
          {
            id: payload.id,
            title: payload.title,
            totalCost: 0,
            totalSeats: 0,
            checked: [],
            reserved: [],
          },
        ];
      }
      return state;
    case ADD_INFORMATION:
      return [
        ...state.map((item) => {
          if (item.id === payload.filmId) {
            return {
              ...item,
              totalCost: payload.cost,
            };
          }
          return item;
        }),
      ];
    case ADD_TO_RESERVE:
      return [
        ...state.map((item) => {
          if (item.id === payload.filmId) {
            return {
              ...item,
              reserved: [...item.reserved, ...item.checked],
              totalSeats: item.totalSeats + item.checked.length,
              checked: [],
              totalCost: 0,
            };
          }
          return item;
        }),
      ];
    default:
      return state;
  }
};

export { Seats };
