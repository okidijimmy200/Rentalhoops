import React, {useState,useEffect } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {readPropertyViews} from './api-property'
import { SliderData } from '../components/SliderData'
import DetailLandlordProfile from './../components/DetailLandlordProfile'
import DetailListings from '../components/DetailListings'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: '80px'
    },
    swiperWrapper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        boxSizing: 'content-box',
        overFlow: 'hidden'
    },
    imageSwiperSlide: {
        width: '43%',
        float: 'left',
        borderRight: '1px solid #fff',
        flexShrink: 0,
        position: 'relative',
        display: 'inline-block !important'
    },
    clickable: {
        display: 'inline-block !important',
        cursor: 'pointer',
        width: '100%',
        height: '427px',
        position: 'relative !important'
    },
    lazyLoaded: {
        width: '100%',
        height: '427px',
        maxHeight: '427px',
        objectFit: 'cover',
        display: 'block',
        margin: 0,
        padding: 0,
        borderRight: '1px solid #fff',
        overFlow: 'hidden'
    },
    
  }))

export default function DetailProperty({ match }) {
    const classes = useStyles()
    const [property, setProperty] = useState({owner: {}})

    useEffect(() => {
        const abortController =new AbortController()
        const signal = abortController.signal

        readPropertyViews({
            propertyId: match.params.propertyId}, 
            signal).then((data) => {
            if(data && data.error) {
                console.log(data.error)
            } else {
                setProperty(data)
                console.log(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [match.params.propertyId])

    return (
        <>
        <div className={classes.root}>
         <div class="listing-images-swiper-container swiper-container-horizontal">   
            <div  className={classes.swiperWrapper} style={{overflow:'hidden'}}>
                      {SliderData.map((slide, index) => {
                            return(
                                <div className={classes.imageSwiperSlide}  key={index}>
                                {/* {index === current && ( */}
                                    <picture className={classes.clickable}> 
                                  <img className={classes.lazyLoaded} alt="pic" src={slide.image + property._id} />
                                  </picture>
                                 
                              </div>
                             
                                )
                          })}
                </div>
             </div>        
             </div>
           <DetailListings property={property}/>
         < DetailLandlordProfile  property={property}/>

        </>
    )
}
