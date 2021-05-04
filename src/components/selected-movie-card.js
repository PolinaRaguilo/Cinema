import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    width: 608,
    height: 320,
    backgroundColor: '#000000',
    marginTop: 56,
    padding: '24px 19px 24px 12px',
  },
  cardList: {
    width: 608,
    height: 221,
    marginTop: 0,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 270,
    marginBottom: 23,
    '&:nth-child(even)': {
      textAlign: 'right',
    },
    '&:nth-child(odd)': {
      textAlign: 'left',
    },
  },
  alignRight: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 270,
    marginBottom: 23,
    textAlign: 'right',
  },
  alignLeft: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 270,
    marginBottom: 23,
    textAlign: 'left',
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  add: {
    position: 'absolute',
    width: 140,
    height: 49,
    bottom: 24,
    right: 16,
    borderRadius: 5,
  },
  ticketsUser: {
    position: 'absolute',
    top: 24,
    right: 16,
  },
});

const SelectedMovieCard = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Card
      className={
        pathname === '/user'
          ? `${classes.card} ${classes.cardList}`
          : classes.card
      }
    >
      <Typography className={classes.title}>Movie name:</Typography>
      <CardContent className={classes.inner}>
        {pathname === '/user' ? (
          <Typography className={classes.ticketsUser}>123 tickets</Typography>
        ) : (
          <>
            <Typography className={classes.title}>Tickets amount:</Typography>
            <Typography className={classes.title}>123</Typography>
          </>
        )}

        <Typography
          className={pathname === '/user' ? classes.alignLeft : classes.title}
        >
          Total cost:
        </Typography>
        <Typography
          className={pathname === '/user' ? classes.alignRight : classes.title}
        >
          123$
        </Typography>
      </CardContent>
      {pathname === '/user' ? (
        <Button className={classes.add}>Reserve</Button>
      ) : (
        <Link to="/user">
          <Button className={classes.add}>Add</Button>
        </Link>
      )}
    </Card>
  );
};

export default SelectedMovieCard;
