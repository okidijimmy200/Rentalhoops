import React, {useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

import auth from './../Auth/auth-helper'
import {signin} from './../Auth/api-auth'
import  GooglePlus from '../assets/images/svgs/googlePlus.svg'
import Facebook from '../assets/images/svgs/facebook.svg'
import Twitter from '../assets/images/svgs/twitter.svg'

const useStyles = makeStyles(theme => ({
  cardMain: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(15),
    paddingBottom: theme.spacing(2)
  },
  CardHeader: {
    paddingTop: '32px',
},
    CardHeading: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        cursor: 'pointer'
    },
    title: {
      padding: '4px 0 11px 133px',
      marginRight: '96px',
      marginBottom: '13px'
    },
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
    width: '13%',
    marginRight: '66px',
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
}))

export default function Login(props) {
    const classes = useStyles()
   
    const [values, setValues] = useState({
      email: '',
      password: '',
      error: '',
      redirectToReferrer: false
    })

    const handleSubmit = () => {
      const user = {
        email: values.email || undefined,
        password: values.password || undefined
      }

      signin(user).then((data) => {
        if (data.error) {
          setValues({...values, error: data.error})
        } else {
          auth.authenticate(data, () => {
            setValues({ ...values, error: '', redirectToReferrer: true})
          })
        }
      })
    }

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value})
    }

    const {from} = props.location.state || {
      from: {
        pathname: '/'
      }
  }

    const {redirectToReferrer} = values 
    if (redirectToReferrer) {
      return (<Redirect to={from} />)
    }

    return (<div>
       <Card className={classes.cardMain} >
                <div className={classes.CardHeader}>
                    <Typography className={classes.CardHeading} component='h1'>
                      Log In
                    </Typography>
                    <CardContent>
                          <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
                        
                          <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal"/>
                          <br/> {
                            values.error && (<Typography component="p" color="error">
                              <Icon color="error" className={classes.error}>error</Icon>
                              {values.error}</Typography>)
                          }

                        </CardContent>
                        <CardActions>
                        <Link to="/signup">
                        <Typography className={classes.title}>Create an account</Typography></Link>
                          <Button color="primary" variant="contained" onClick={handleSubmit} className={classes.submit}>Login</Button>
                        </CardActions>
                        <CardContent className={classes.cardFieldset} component='fieldset'>
                            <Typography className={classes.CardOptionsNote} component='small' >Or login in with</Typography>
                            <ul className={classes.CardOptions}>
                                <li className={classes.CardOptionsItem}>
                                    <img src={GooglePlus} className={classes.Img} alt='pic'/>
                                </li>
                                <li className={classes.CardOptionsItem}>
                                    <img src={Facebook} className={classes.Img} alt='pic'/>
                                </li>
                                <li className={classes.CardOptionsItem}>
                                    <img src={Twitter} className={classes.Img} alt='pic'/>
                                </li>
                            </ul>
                        </CardContent>
                </div>
               
            </Card>
       
    </div>
    )
}