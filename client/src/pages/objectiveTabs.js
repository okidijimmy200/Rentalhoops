import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import diamondPic from '../assets/images/diamond.jpg'
import nodetree from '../assets/images/nodetree.jpg'
import fingerprint from '../assets/images/fingerprint.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(2),
    height: 'auto',
    width: 'auto',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    boxShadow: '0px 0px 0px 0px'
  }, 
  iconPic: {
    // height: '3rem',
    // width: '3rem'
  },
  iconMain:{
    height: '5rem',
    width: '5rem'
  },
  title: {
    color: '#000'
  },
  subtitle: {
    padding: '5px',
    textAlign: 'center',
    marginTop: '15px'
  }
});

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={4}  {...props} />;

const ObjectiveTabs = withStyles(styles)(
  ({ classes }) => (
      <div className={classes.root}>
    <Container spacing={4}>
        <Item>
          <Paper className={classes.paper} component='div'>
              <div className={classes.iconPic}>
                <img src={diamondPic} className={classes.iconMain} alt='pic'/>
              </div>
              <div>
              <Typography variant='h6' className={classes.title}>
              Increased Access.
              </Typography>
              <Typography className={classes.subtitle}>
              Make more informed real estate decisions by accessing our robust 
              inventory of properties before they hit the market.
              </Typography>
              </div>
            
          </Paper>
        </Item>
        <Item>
          <Paper className={classes.paper} component='div'>
          <div className={classes.iconPic}>
                <img src={nodetree} className={classes.iconMain} alt='pic'/>
              </div>
              <div>
              <Typography variant='h6' className={classes.title}>
              Smarter Results.
              </Typography>
              <Typography className={classes.subtitle}>
              We use predictive analytics to
               anticipate the market and deliver the
                best matches to you.
              </Typography>
              </div>
          </Paper>
        </Item>
        <Item>
          <Paper className={classes.paper}  component='div'>
          <div className={classes.iconPic}>
                <img src={fingerprint} className={classes.iconMain} alt='pic'/>
              </div>
              <div>
              <Typography variant='h6' className={classes.title}>
              Personalized Service.
              </Typography>
              <Typography className={classes.subtitle}>
              Your real estate journey should be seamless. 
              With our dedicated Client Success Team, we’re there every step of the way.
              </Typography>
              </div>
          </Paper>
        </Item>
    </Container>
  </div>
  )
);

export default ObjectiveTabs;
