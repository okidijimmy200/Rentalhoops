import React, {useState,useEffect } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {readPropertyViews} from './api-property'
import { SliderData } from '../components/SliderData'


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
    wrap: {
        // margin: '30px auto 20px',
        // padding: 0,
        // width: '75%',
        // marginBottom: '45px',
        // marginTop:' 30px'
        padding: '5rem 9rem'
    },
    wideContent: {
        margin: '30px auto 20px',
        // padding: 0,
        // width: '75%',
        marginBottom: '45px',
        marginTop:' 30px'
    },
    left: {
        // textAlign: 'left',
        // width: '100%'
    },
    listingDetails:{
        // width: '58%',
        // marginRight: 0,
        // float: 'left',
        // verticalAlign: 'top',
        // display: 'inline',
        // margin: '0 3% 0 0',
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between'

    },
    favorite: {
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'nowrap',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // alignContent: 'flex-start',
        paddingBottom: '5px',
        flex: '0 0 65%',
        marginRight: '15px'
    },
    title: {
        padding: 0,
        marginRight: '20px',
        fontFamily: 'sans-serif',
        fontSize: '36px',
        lineHeight: '36px',
        textTransform: 'uppercase'
    },
    subtitle: {
        fontFamily: 'sans-serif',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#404040',
        textTransform: 'uppercase'
    },
    divide:{
        fontFamily: 'sans-serif',
        fontSize: '18px',
        lineHeight: '18px',
        color: '#9a9898',
        marginTop: '6px'
    },
    status: {
        marginTop: '10px'
    },
    detail: {
        marginTop: '20px',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between'
    },
    price: {
        verticalAlign: 'top',
        // display: 'inline-block',
        marginRight: '20px',
        marginBottom: '20px',
        color: '#767676',
        padding: 0,
        listStyle: 'none'
    },
    indoorDetails:{
        color: '#9a9898',
        marginRight: '20px',
        marginBottom: '20px',
        fontSize: '14px',
        // display:' inline-block',
        padding: 0,
        listStyle: 'none'
    },
    daysOnMarket: {
        marginTop: 0,
        marginBottom: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8px',
        listStyle: 'none'
    },
    listingLinks: {
        flex:1
    },
    dark:{
        color: '#fff',
        backgroundColor: '#BA265D',
        borderRadius: '3px',
        padding: '16px 32px',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        textTransform: 'capitalize'
    },
    Date: {
        fontWeight:' bold',
        fontSize: '20px',
        color: '#404040',
        letterSpacing:' 1px'
    },
    tetiary: {
        color: '#404040',
        fontSize: '28px',
        lineheight: '27px'
    }
  }))

export default function DetailProperty({ match }) {
    const classes = useStyles()
    const [property, setProperty] = useState('')

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
             <div className={classes.wrap}>   
                    <div className={classes.left}>        
                        <div className={classes.listingDetails}>              
                            <div className={classes.favorite}>                 
                                <h2 className={classes.title}>{property.name}</h2>    
                                    <img class="clickable"  />   
                                <p className={classes.subtitle}>{property.location}, {property.category}</p>    
                                <p className={classes.divide}></p>              
                             <div className={classes.status}>
                                </div>   
                                    <ul className={classes.detail}>                        
                                        <li className={classes.price}>  
                                        <h2 className={classes.tetiary}>Price</h2>
                            <div>                              
                            <h3 >Shs. {property.price}</h3> </div></li>  
                                <li className={classes.indoorDetails}>                            
                                     <h2 className={classes.tetiary}>{property.bedRooms}</h2>Bed</li>                        
                                 <li className={classes.indoorDetails}>                            
                                <h2 className={classes.tetiary}>{property.bathRooms}</h2>Bath</li>                        
                                <li className={classes.indoorDetails}>                            
                                <h3 className={classes.tetiary}>Family Number</h3>{property.familyNumber}</li> </ul>
                                <ul className={classes.daysOnMarket}><li>                            
                        <p>Date Available:<span className={classes.Date} >2021-12-05</span> </p></li></ul>
                    </div>                
                        <div className={classes.listingLinks}>
                         <button className={classes.dark}>Request Tour</button></div>           
                             </div> </div> 


         </div>
        </>
    )
}
