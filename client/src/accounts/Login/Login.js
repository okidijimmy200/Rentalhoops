import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import auth from './../auth/auth-helper'
import {Redirect} from 'react-router-dom'
import {signin} from './../auth/api-auth'
import  GooglePlus from '../assets/images/svgs/googlePlus.svg'
import Facebook from '../assets/images/svgs/facebook.svg'
import Twitter from '../assets/images/svgs/twitter.svg'

import './Login.scss'

export default function Login(props) {
   
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
                            <h2 className='CardOptionsNote'>Or login in with</h2>
                            <ul className='CardOptions'>
                                <li className={classes.CardOptionsItem}>
                                    <img src={GooglePlus} className='Img' alt='pic'/>
                                </li>
                                <li className={classes.CardOptionsItem}>
                                    <img src={Facebook} className='Img' alt='pic'/>
                                </li>
                                <li className={classes.CardOptionsItem}>
                                    <img src={Twitter} className='Img' alt='pic'/>
                                </li>
                            </ul>
                        </CardContent>
                </div>
               
            </Card>
       
    </div>
    )
}