import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'
import useForm from './../validate/useForm'
import validate from './../validate/utility'
import  GooglePlus from '../assets/images/svgs/googlePlus.svg'
import Facebook from '../assets/images/svgs/facebook.svg'
import Twitter from '../assets/images/svgs/twitter.svg'
// import GoogleButton from 'react-google-button'

const useStyles = makeStyles(theme => ({
  //switcher
  CardHeader: {
    paddingTop: '32px',
  },
  CardHeading: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      cursor: 'pointer'
  },
  cardMain: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(15),
      paddingBottom: theme.spacing(2)
    },
  //end
  card: {
    maxWidth: 430,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(15),
    paddingBottom: theme.spacing(2),
    paddingRight: '32px',
    paddingLeft: '32px'
    
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    width: '16%',
    margin: 'auto',
    marginBottom: theme.spacing(2),
    backgroundColor: '#BA265D',
    "&:hover": {
        backgroundColor: '#ca5376'
    }  
  },
  cardFieldset: {
    position: 'relative',
    padding:' 0',
    margin:' 0',
    border:' 0',
  
    '& + &' :{
      marginTop: '24px'
    },
  
   " &:nth-last-of-type(2)": {
      marginTop: '20px'
    },
  
    "&:last-of-type" :{
      textAlign: 'center'
    }
  },
  CardOptionsNote: {
    paddingTop:' 8px',
    display: 'block',
    width: '100%',
    fontSize: '12px',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  CardOptions: {
    padding:' 0',
    margin:' 16px 0 8px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    listStyleType: 'none'
  },
  CardOptionsItem: {
      height: '20px',
      width: '20px',
    "&:nth-of-type(n+2) " :{
        marginLeft: "16px"
      }
  },
  Img: {
      height: '20px',
      width: '20px'
  },
  title: {
    padding: '4px 0 11px 120px',
    marginRight: '85px',
    marginBottom: '13px'
  },
}))

export default function Signup() {
    const classes = useStyles()
    const { handleChange, handleSubmit, values, errors} = useForm(
        validate
    );

    return (<div>
       <Card className={classes.cardMain}  >
                <div className={classes.CardHeader}>
                    <Typography className={classes.CardHeading} component='h1'>
                      Sign Up
                    </Typography>
                    <CardContent>
                        <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
                        <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
                        <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal"/>
                        <br/>
                        <TextField id="passwordConfirm" type="password" label="Password Confirm" className={classes.textField} value={values.passwordConfirm} onChange={handleChange('passwordConfirm')} margin="normal"/>
                        <br/> {
                          values.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>!</Icon>
                            {values.error}</Typography>)
                        }
                      </CardContent>
                      <CardActions>
                      <Link to="/login">
                        <Typography className={classes.title}>Log Into account</Typography></Link>
                        <Button color="primary" variant="contained" onClick={handleSubmit} className={classes.submit}>Sign Up</Button>
                      </CardActions>
                      <CardContent className={classes.cardFieldset} component='fieldset'>
                          <Typography className={classes.CardOptionsNote} component='small' >Or sign up with</Typography>
                          <ul className={classes.CardOptions}>
                              <li className={classes.CardOptionsItem}>
                           
                                  <img src={GooglePlus} className={classes.Img} />
                              </li>
                              <li className={classes.CardOptionsItem}>
                                  <img src={Facebook} className={classes.Img} />
                              </li>
                              <li className={classes.CardOptionsItem}>
                                  <img src={Twitter} className={classes.Img} />
                              </li>
                          </ul>
                               {/* google react login */}
                               {/* <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                  />, */}
                      </CardContent>
                    <Dialog open={values.open} disableBackdropClick={true}>
                      <DialogTitle>New Account</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          New account successfully created.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Link to="/login">
                          <Button color="primary" autoFocus="autoFocus" variant="contained">
                            Sign In
                          </Button>
                        </Link>
                      </DialogActions>
                    </Dialog>
                </div>
               
            </Card>
       
    </div>
    )
}