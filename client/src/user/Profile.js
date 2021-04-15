import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'
import DeleteUser from './DeleteUser'
import auth from './../auth/auth-helper'
import {read} from './api-user.js'
import {Redirect, Link} from 'react-router-dom'
import LandlordProperty from './../property/LandlordProperty'
import { listByLandlord} from './../property/api-property'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(15)
    
  }),
  title: {
    marginTop: theme.spacing(3),
    color: theme.palette.protectedTitle
  },
  rootMain: {
    flexGrow: 1, 
    display: 'flex',
    width: '90%',
    margin: '0 auto',
    marginTop: theme.spacing(15)
  },
  options: {
    padding: '15px 16px'
  }
}))

export default function Profile({ match }) {
  const classes = useStyles()
  const [user, setUser] = useState({})
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.params.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true)
      } else {
        setUser(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
    // eslint-disable-next-line
  }, [match.params.userId])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    listByLandlord({
      userId: jwt.user._id
    }, {t: jwt.token}, signal).then((data) => {
      // eslint-disable-next-line
      if (data == '') {
        setIsUploaded(true)
      }
    })
    return function cleanup() {
      abortController.abort()
    }
    // eslint-disable-next-line
  }, [jwt.user._id])

  
  if (isUploaded) {
    return   <Paper className={classes.root} elevation={4}>
    <Typography variant="h6" className={classes.title}>
      Profile
    </Typography>
    <List dense>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Person/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.name} secondary={user.email}/> {
          // eslint-disable-next-line
         auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
          (<ListItemSecondaryAction>
            <Link to={"/user/edit/" + user._id}>
              <IconButton aria-label="Edit" color="primary">
                <Edit/>
              </IconButton>
            </Link>
            <DeleteUser userId={user._id}/>
          </ListItemSecondaryAction>)
        }
      </ListItem>
      <Divider/>
      <ListItem>
        <ListItemText primary={"Joined: " + (
          new Date(user.created)).toDateString()}/>
      </ListItem>
    </List>
    
  </Paper>
}
  
    if (redirectToSignin) {
      return <Redirect to='/signin'/>
    }
    return (
      <>
      {
        !auth.isAuthenticated().user.landlord && (
          <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email}/> {
              // eslint-disable-next-line
             auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
              (<ListItemSecondaryAction >
                <Link to={"/user/edit/" + user._id}>
                  <IconButton aria-label="Edit" color="primary">
                    <Edit/>
                  </IconButton>
                </Link>
                <DeleteUser userId={user._id}/>
              </ListItemSecondaryAction>)
            }
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary={"Joined: " + (
              new Date(user.created)).toDateString()}/>
          </ListItem>
        </List>
        
      </Paper>
        )
      }
      {
        auth.isAuthenticated().user.landlord && (
          <div className={classes.rootMain}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={9} md={9}>
            <LandlordProperty />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
        <Paper className={classes.root} elevation={4} style={{marginTop: '26px'}}>
        <Typography variant="h6" className={classes.title} style={{marginTop: '0'}}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email}/> 
          </ListItem>
          <Divider/>
          <ListItem className={classes.options}>
          {
              // eslint-disable-next-line
             auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
              (<ListItemSecondaryAction style={{right: '75px'}}>
                <Link to={"/user/edit/" + user._id}>
                  <IconButton aria-label="Edit" color="primary">
                    <Edit/>
                  </IconButton>
                </Link>
                <DeleteUser userId={user._id}/>
              </ListItemSecondaryAction>)
            }
          </ListItem>
          
          <Divider />
          <ListItem>
            <ListItemText primary={"Joined: " + (
              new Date(user.created)).toDateString()}/>
          </ListItem>
        </List>
        
      </Paper>
        </Grid>
        </Grid>
       
        
      </div>
      
        )
        
      }
      </>
    )
  }