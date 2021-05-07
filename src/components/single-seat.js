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
  const [styleSeat, setStyle] = useState(
    `${classes.seat} ${classes.available}`,
  );
  const { checkedSeats, reservedSeats, filmId } = props;

  const onClickSeat = (idSeat) => {
    const currentSeat = Number(idSeat);
    const oldStyle = styleSeat.split(' ');
    if (
      checkedSeats.includes(currentSeat) === false &&
      reservedSeats.includes(currentSeat) === false
    ) {
      dispatch(setChecked(filmId, currentSeat));
      oldStyle[1] = `${classes.checked}`;
    } else if (checkedSeats.includes(currentSeat) === true) {
      dispatch(deleteChecked(filmId, currentSeat));
      oldStyle[1] = `${classes.available}`;
    }

    setStyle(oldStyle.join(' '));
  };

  const onClickHandler = () => {
    onClickSeat(Number(props.id));
  };

  return (
    <TableCell>
      <Box id={props.id} className={styleSeat} onClick={onClickHandler} />
    </TableCell>
  );
};
export default SingleSeat;
