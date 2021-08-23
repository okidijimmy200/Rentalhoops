import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'

import fakeMap from './../../assets/images/fake-map2.jpg'
import { listAllProperties } from './../../Property/api-property'
import Skeleton from './../../Components/Skeleton/Skeleton'
import ImageCards from '../../Components/Property/ImageCard/ImageCards'
import {SliderData} from '../../Components/SliderData/SliderData'
import SearchNav from './../../Components/SearchNav/SearchNav'


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
}))

export default function RentalProperty(props) {
    const classes = useStyles()
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState('')


    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        listAllProperties(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setLoading(false)
                setProperties(data)
                setCount(data.length)
            }
            // const number = data.length
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])

    return (
        <>
        <SearchNav  count={count}/>
                <section >
                    <Grid container spacing={0} style={{marginTop: '115px'}} >
                            <Grid item xs={12} sm={8} md={8} >
                                {loading  ? <Skeleton /> : 
                                        <Grid container spacing={0}>
                                        {properties.map((property, i) => {
                                            return <Grid item xs={12} sm={6} md={6} style={{marginTop: '5px', marginBottom: '10px'}} key={i}>
                                                <Link to={"/property/"+property._id} style={{zIndex: -10, position: 'relative'}}>
                                                    <ImageCards property={property} slides={SliderData}/>
                                                    </Link>
                                                    </Grid>
                                        })}
                                    </Grid>
                                }
                        
                                
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
