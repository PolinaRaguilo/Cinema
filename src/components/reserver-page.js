/* eslint-disable no-unused-vars */
import {
  Box,
  CircularProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL_DATA } from '../config/constants';
import useFilms from '../hooks/useFilms';
import { API__KEY } from '../key';
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
  const { id } = useParams();
  const [checkedSeats, setCheckedCeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const [current, setCurrent] = useState(null);

  const getCurrent = async () => {
    try {
      const response = await axios.get(
        `${API_URL_DATA}/?apikey=${API__KEY}&i=${id}`,
      );
      await setCurrent(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCurrent();
  }, []);

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
  console.log(cost);

  console.log(checkedSeats, reservedSeats);
  if (current === null) {
    return <CircularProgress />;
  }
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
      <SelectedMovieCard
        titleMovie={current.Title}
        ticketsAmount={checkedSeats.length}
        totalCost={cost}
      />
    </Box>
  );
};

export default ReservePage;
