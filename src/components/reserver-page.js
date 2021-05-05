import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import SelectedMovieCard from './selected-movie-card';

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

const ReservePage = () => {
  const classes = useStyles();

  const classesForSeat = `${classes.seat} ${classes.available}`;
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.mainTitle}>Choose your place </Typography>
      <Box>
        <Table>
          <TableBody>
            {[1, 2, 3, 4, 5].map((row, index) => (
              <TableRow key={index}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((cell, i) => (
                  <TableCell key={i}>
                    <Box id={`${row}${cell}`} className={classesForSeat} />
                  </TableCell>
                ))}
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
