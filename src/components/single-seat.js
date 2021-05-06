/* eslint-disable no-unused-vars */
import { Box, makeStyles, TableCell } from '@material-ui/core';
import { useState } from 'react';

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
  const [styleSeat, setStyle] = useState(
    `${classes.seat} ${classes.available}`,
  );

  const {
    checkedSeats,
    setCheckedCeats,
    reservedSeats,
    setReservedSeats,
  } = props;

  const onClickSeat = (idSeat) => {
    const currentSeat = idSeat;
    const oldStyle = styleSeat.split(' ');
    if (
      checkedSeats.includes(currentSeat) === false &&
      reservedSeats.includes(currentSeat) === false
    ) {
      setCheckedCeats([...checkedSeats, currentSeat]);
      oldStyle[1] = `${classes.checked}`;
    } else if (checkedSeats.includes(currentSeat) === true) {
      // setReservedSeats([...reservedSeats, currentSeat]);
      setCheckedCeats([...checkedSeats.filter((item) => item !== currentSeat)]);
      oldStyle[1] = `${classes.available}`;
    }
    const cost = checkedSeats.reduce((summa, item) => {
      switch (item.toString()[0]) {
        case '1':
          return summa + 4;
        case '2':
          return summa + 10;
        case '3':
          return summa + 10;
        case '4':
          return summa + 10;
        case '5':
          return summa + 14;
        default:
          return summa;
      }
    }, 0);
    console.log(typeof cost);
    props.setTotalCost(props.totalCost + cost);
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
