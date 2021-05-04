import { Box, makeStyles, Typography } from '@material-ui/core';
import ReservedTicketsCard from './reserved-tickets-card';
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 44,
  },
});

const UserChoice = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>Your tickets:</Typography>
      <SelectedMovieCard />
      <SelectedMovieCard />

      <ReservedTicketsCard />
    </Box>
  );
};

export default UserChoice;
