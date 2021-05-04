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
});

const ReservePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.mainTitle}>Choose your place </Typography>
      <Box>
        <Table>
          <TableBody>
            {[1, 2, 3, 4, 5].map((row, i) => (
              <TableRow key={i}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((cell, i) => (
                  <TableCell key={i}>
                    <Box className={classes.seat} />
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
