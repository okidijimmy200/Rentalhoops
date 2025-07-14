import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({ 
    wrap: {
        padding: '5rem 9rem 2rem 9rem'
    },
    wrapLandlord: {
        padding:'0 9rem'
    },
    wideContent: {
        margin: '30px auto 20px',
        marginBottom: '45px',
        marginTop:' 30px'
    },
    left: {
        // textAlign: 'left',
        // width: '100%'
    },
    listingDetails:{
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between'

    },
    favorite: {
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

export default function DetailListings({property}) {
    const classes = useStyles()
    return (
        <>
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
                                        <h2 className={classes.tetiary}>
                                            Price
                                           
                                        </h2>
                            <div>                              
                            <h3 >Shs. {property.price}</h3> </div></li>  
                                <li className={classes.indoorDetails}>                            
                                     <h2 className={classes.tetiary}>{property.bedRooms}</h2>Bed</li>                        
                                 <li className={classes.indoorDetails}>                            
                                <h2 className={classes.tetiary}>{property.bathRooms}</h2>Bath</li>                        
                                <li className={classes.indoorDetails}>                            
                                <h3 className={classes.tetiary}>Family Number</h3>{property.familyNumber}</li> </ul>
                                <ul className={classes.daysOnMarket}><li>                            
                        <p>Date Available:<span className={classes.Date} >2025-12-05</span> </p></li></ul>
                    </div>                
                        <div className={classes.listingLinks}>
                         <button className={classes.dark}>Request Tour</button></div>           
                             </div> </div> 


         </div>
        </>
    )
}
