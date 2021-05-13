import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    backgroundColor: '#000000',
    padding: '24px 19px 24px 16px',
    minWidth: 608,
    height: 221,
    marginTop: 0,
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    width: 280,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
    '& > p:nth-child(odd)': {
      textAlign: 'left',
      width: 400,
    },
    '& > p:nth-child(even)': {
      textAlign: 'right',
      width: 100,
    },
  },
});

const ReservedTicketsCard = () => {
  const classes = useStyles();
  const state = useSelector((state) => state.seats);
  return (
    <Card className={classes.card}>
      <Typography className={classes.text}>Reserved tickets: </Typography>

      {state
        .filter((item) => item.totalSeats !== 0)
        .map((item) => {
          return (
            <CardContent className={classes.inner}>
              <Typography className={classes.text}>{item.title}</Typography>
              <Typography className={classes.text}>
                {item.totalSeats} tickets
              </Typography>
            </CardContent>
          );
        })}
    </Card>
  );
};

export default ReservedTicketsCard;
