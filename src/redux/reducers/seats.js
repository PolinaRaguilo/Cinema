import {
  ADD_INFORMATION,
  ADD_MOVIE,
  CHECKED_DELETE,
  CHECKED_SEAT,
} from '../../config/constants';

const initialState = [
  {
    id: 'tt2527336',
    title: 'Star Wars: Episode VIII - The Last Jedi',
    totalCost: 0,
    totalSeats: 0,
    checked: [],
    reserved: [25, 48],
  },
  {
    id: 'tt0076759',
    title: 'Star Wars: Episode IV - A New Hope',
    totalCost: 0,
    totalSeats: 0,
    checked: [],
    reserved: [410, 16],
  },
];

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
              totalSeats: payload.amountSeats,
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
