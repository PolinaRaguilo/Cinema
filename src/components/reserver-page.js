/* eslint-disable no-unused-vars */
import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import SelectedMovieCard from './selected-movie-card';
import SingleSeat from './single-seat';

const useStyles = makeStyles({
  wrapper: {
    width: 840,
    height: 840,
    backgroundColor: '#2B2243',
    margin: '0 auto',
    marginTop: 24,
    padding: '36px 117px 66px 112px',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
});

const ReservePage = () => {
  const classes = useStyles();
  const [checkedSeats, setCheckedCeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  // const onClickSeat = (idSeat) => {
  //   const currentSeat = idSeat;
  //   const oldStyle = styleSeat.split(' ');

  //   if (
  //     checkedSeats.includes(currentSeat) === false &&
  //     reservedSeats.includes(currentSeat) === false
  //   ) {
  //     setCheckedCeats([...checkedSeats, currentSeat]);
  //     oldStyle[1] = `${classes.checked}`;
  //   } else if (checkedSeats.includes(currentSeat) === true) {
  //     // setReservedSeats([...reservedSeats, currentSeat]);
  //     setCheckedCeats([...checkedSeats.filter((item) => item !== currentSeat)]);
  //     oldStyle[1] = `${classes.available}`;
  //   }
  //   setStyle(oldStyle.join(' '));
  // };
  console.log(checkedSeats, reservedSeats);

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.mainTitle}>Choose your place </Typography>
      <Box>
        <Table>
          <TableBody>
            {[1, 2, 3, 4, 5].map((row, index) => (
              <TableRow key={index}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((cell, i) => {
                  return (
                    <SingleSeat
                      key={i}
                      id={`${row}${cell}`}
                      checkedSeats={checkedSeats}
                      setCheckedCeats={setCheckedCeats}
                      reservedSeats={reservedSeats}
                      setReservedSeats={setReservedSeats}
                    />
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <SelectedMovieCard />
    </Box>
  );
};

export default ReservePage;
