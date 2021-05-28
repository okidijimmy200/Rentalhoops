import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import fakeMap from './../assets/images/fake-map2.jpg'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import { SavedProperty } from './api-property'
import auth from './../auth/auth-helper'
import Skeleton from './skeleton'
import ImageCards from './ImageCards'
import {SliderData} from './../components/SliderData'
import SearchNav from './../contents/SearchNav'
// import jwt from 'express-jwt'

const useStyles = makeStyles(theme => ({
    
    cardMap: {
        maxWidth: 600,
        margin: 'auto',
    },
    mediaMap: {
        width: '100%',
        height: '81vh',
        marginTop: '-2px'
    },
    
      card: {
        height: '355px',
        width: '100%',
        margin: '0',
        padding: '0',
        border: '1px solid #d8d8d8',
        backgroundColor: '#fff',
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0px 0px 0px 0px'
      },
      media:{
        width:' 100%',
        height: '70%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top:' 0',
        zIndex:' 0'
      }
      
}))

export default function PropertySaved({match}) {
    const classes = useStyles()
    const [properties, setProperties] = useState([])
    // const [loading, setLoading] = useState(true)

    const jwt = auth.isAuthenticated()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        SavedProperty({
            userId: match.params.userId
        }, {t: jwt.token}, signal).then((data) => {
            if(data && data.error) {
                console.log(data.error)
            } else {
                setProperties(data)
                console.log(data)
            }
        })

        return function cleanup() {
            abortController.abort()
        }
    },[match.params.userId])
    return (
        <>
           <SearchNav />
                <section >
                    <Grid container spacing={0} style={{marginTop: '115px'}} >
                            <Grid item xs={12} sm={8} md={8} >
                                        <Grid container spacing={0}>
                                        {properties.map((property, i) => {
                                            return <Grid item xs={12} sm={6} md={6} style={{marginTop: '5px', marginBottom: '10px'}} key={i}>
                                                    <ImageCards property={property} slides={SliderData}/>
                                                    </Grid>
                                        })}
                                    </Grid>
                        
                                
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Card className={classes.cardMap}>
                                    <CardMedia
                                    className={classes.mediaMap}
                                    image={fakeMap} 
                                    style={{position: 'fixed'}}
                                    />
                                </Card>
                            </Grid>
                    </Grid>
                    
                </section> 
        </>
    )
}
