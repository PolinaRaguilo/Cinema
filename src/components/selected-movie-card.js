import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    width: 608,
    height: 320,
    backgroundColor: '#000000',
    marginTop: 56,
    padding: '24px 19px 24px 12px',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 280,
    marginBottom: 23,
    '&:nth-child(even)': {
      textAlign: 'right',
    },
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
});

const SelectedMovieCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.title}>Movie name</Typography>
      <CardContent className={classes.inner}>
        <Typography className={classes.title}>Tickets amount:</Typography>
        <Typography className={classes.title}>123</Typography>
        <Typography className={classes.title}>Total cost:</Typography>
        <Typography className={classes.title}>123$</Typography>
      </CardContent>
      <Button className={classes.add}>Add</Button>
    </Card>
  );
};

export default SelectedMovieCard;
