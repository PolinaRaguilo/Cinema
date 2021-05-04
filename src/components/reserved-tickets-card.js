import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    backgroundColor: '#000000',
    padding: '24px 19px 24px 16px',
    width: 608,
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
    flexWrap: 'wrap',
    '& > p:nth-child(odd)': {
      textAlign: 'left',
    },
    '& > p:nth-child(even)': {
      textAlign: 'right',
    },
  },
});

const ReservedTicketsCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.text}>Reserved tickets: </Typography>
      <CardContent className={classes.inner}>
        <Typography className={classes.text}>Movie name: </Typography>
        <Typography className={classes.text}>123 tickets</Typography>
        <Typography className={classes.text}>Movie name: </Typography>
        <Typography className={classes.text}>123 tickets</Typography>
        <Typography className={classes.text}>Movie name: </Typography>
        <Typography className={classes.text}>123 tickets</Typography>
      </CardContent>
    </Card>
  );
};

export default ReservedTicketsCard;
