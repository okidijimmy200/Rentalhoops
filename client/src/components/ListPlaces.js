import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    neighbourList: {
        height: '50px',
        padding: '0 20px',
        margin: 0,
        fontFamily: 'OpenSans-regular,sans-serif',
        fontSize: '14px',
        lineHeight: '50px',
        color: '#acacac',
        textAlign: 'center',
        verticalAlign: 'middle',
        border: '1px solid #d4d4d4',
        display: 'inline-block',
        cursor:' pointer',
        marginRight: '-1px',
        marginTop: '-1px'
      },
      leftAligned: {
        margin: '10px 0',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'left',
        padding: 0,
        listStyle: 'none'
      },
}))

export default function ListPlaces() {
    const classes = useStyles()

  return (
  <>
        <div className={classes.neighborhoodFilter}>     
            <ul className={classes.leftAligned}>    
            <a href='/search/layibi'> 
                <li className={classes.neighbourList}>   
                <span>Layibi</span></li>  </a> 
                <a href='/search/bardege' >
                <li className={classes.neighbourList}>  
                
                <span >Bar De Ge</span>     
                    </li></a>   
                <a href='/search/pece'>         
                    <li className={classes.neighbourList}> 
                <span >Pece</span>     
                     </li>  </a> 
                <a href='/search/laroo'>            
                    <li className={classes.neighbourList}> 
                <span >Laroo</span> </li>   
                 </a>   
            </ul>
    </div> 
</>
  );
}