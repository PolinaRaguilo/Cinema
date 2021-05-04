import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    width: 840,
    height: 840,
    backgroundColor: '#2B2243',
    margin: '0 auto',
    marginTop: 24,
    padding: '36px 117px 66px 112px',
    '& p:first-child': {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 32,
    },
  },
});

const ReservePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography>Choose your place </Typography>
    </Box>
  );
};

export default ReservePage;
