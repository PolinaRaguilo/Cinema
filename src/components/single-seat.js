/* eslint-disable no-unused-vars */
import { Box, makeStyles, TableCell } from '@material-ui/core';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChecked, deleteChecked } from '../redux/actions/seatsAction';

const useStyles = makeStyles({
  seat: {
    width: 36,
    height: 36,
    backgroundColor: '#C4C4C4',
    marginRight: 16,
    marginBottom: 24,
  },
  available: {
    border: '3px solid #85FF91',
    '&:hover': {
      backgroundColor: '#85FF91',
    },
  },
  checked: {
    border: '3px solid #FBC60A',
    '&:hover': {
      backgroundColor: '#FBC60A',
    },
  },
  reserved: {
    border: '3px solid #FF0000',
    '&:hover': {
      backgroundColor: '#FF0000',
    },
  },
});

const SingleSeat = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { checkedSeats, reservedSeats, filmId } = props;

  const onClickSeat = (idSeat) => {
    const currentSeat = Number(idSeat);
    if (
      checkedSeats.includes(currentSeat) === false &&
      reservedSeats.includes(currentSeat) === false
    ) {
      dispatch(setChecked(filmId, currentSeat));
    } else if (checkedSeats.includes(currentSeat) === true) {
      dispatch(deleteChecked(filmId, currentSeat));
    }
  };

  const onClickHandler = () => {
    onClickSeat(Number(props.id));
  };

  const seatClasses = (idS) => {
    const idSeat = Number(idS);
    let newStyle = `${classes.seat} `;
    if (
      checkedSeats.includes(idSeat) === false &&
      reservedSeats.includes(idSeat) === false
    ) {
      newStyle += `${classes.available}`;
    } else if (
      checkedSeats.includes(idSeat) === true &&
      reservedSeats.includes(idSeat) === false
    ) {
      newStyle += `${classes.checked}`;
    } else {
      newStyle += `${classes.reserved}`;
    }
    return newStyle;
  };

  const newS = seatClasses(props.id);

  return (
    <TableCell>
      <Box id={props.id} className={newS} onClick={onClickHandler} />
    </TableCell>
  );
};
export default SingleSeat;
