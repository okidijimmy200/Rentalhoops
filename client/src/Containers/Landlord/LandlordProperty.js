import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

import auth from '../../Auth/auth-helper'
import { listByLandlord} from './../../Property/api-property'
import ImageCard from '../../Components/Property/ImageCard/ImageCard'

// styling the component
const useStyles = makeStyles(theme => ({
      gridRoot: {
          display: 'flex'
      }
}))

export default function LandlordProperty({slides}) {
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
                console.log(data)
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
        <Paper style={{boxShadow: '0 0 0 0'}}>
            <Typography>
                Your Properties
            </Typography>
            <Grid container spacing={4} className={classes.gridRoot}> 
                {property.map((property, i) => {
                    return <Grid item xs={12} sm={12} md={6} key={i}>
                         <ImageCard property={property} slides={slides}/>
                        </Grid>
                })}
            </Grid>
        </Paper>
            
        </>
    )
}


