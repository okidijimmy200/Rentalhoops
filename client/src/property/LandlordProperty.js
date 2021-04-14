import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import auth from './../auth/auth-helper'
import { listByLandlord} from './../property/api-property'
import {Redirect} from 'react-router-dom'

// styling the component
const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(12)
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px`,
        color: theme.palette.protectedTitle,
        fontSize: '1.2em'
    },
    addButton: {
        float: 'right'
    },
    leftIcon: {
        marginRight: '8px'
    },
    avatar: {
        borderRadius: 0,
        width: 65,
        height: 40
    },
    listText: {
        marginLeft: 15
    }
}))

export default function LandlordProperty() {
    const classes = useStyles()
    const [property, setProperty] = useState([])
    const [redirectToSignin, setRedirectToSignin] = useState(false)
    const jwt = auth.isAuthenticated()

    //fetch the list property API
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        listByLandlord({
            userId: jwt.user._id
        }, {t: jwt.token}, signal).then((data) => {
            if (data.error) {
                setRedirectToSignin(true)
            } 
            else {
                setProperty(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
       // eslint-disable-next-line 
    }, [jwt.user._id])
    

    if (redirectToSignin) {
        return <Redirect to='/login/' />
    }
    return (
        <>
        <Paper>
            <Typography>
                Your Properties
            </Typography>
            <List dense>
                {property.map((property, i) => {
                    return <ListItem key={i}>
                        <ListItemAvatar>
                            <Avatar src={''} />
                        </ListItemAvatar>
                        <ListItemText primary={property.name} secondary={property.location} className={classes.listText} />
                    </ListItem>
                })}
            </List>
        </Paper>
            
        </>
    )
}
