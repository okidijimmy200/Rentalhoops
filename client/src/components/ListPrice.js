import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textSearch: {
        with: '100%'
    },
    filterSection: {
      padding: '20px 0 10px 0',
      borderBottom: '1px solid #d4d4d4'
    },
    priceInline: {
      display: 'inline-block'
    },
    inputText: {
      margin: '10px 10px 10px 0',
      padding: '10px',
      fontSize: '14px',
      color: '#404040',
      display: 'block',
      fontFamily: 'OpenSans-regular,sans-serif',
      border: '1px solid #d8d8d8',
      resize: 'none',
      outline: '0',
      outlineColor: 'initial',
      outlineStyle: 'initial',
      outlineWidth: '0'
    },
}))

export default function ListPrice() {
    const classes = useStyles()
    return (
        <>
           <div className={classes.filterSection}>   
                  <h2>PRICE</h2>    
                 <div style={{display: 'flex'}}>                
                 <div className={classes.priceInline}>                         
                 <span>Min Price</span>                          
               <div class="filterInput">                         
               <input type="text" placeholder="ex. shs:100K" className={classes.inputText}/>                           
              </div>  </div>                        
               <div lassName={classes.priceInline} >              
                  <span>Max Price</span>                         
               <div class="filterInput">                       
                    <input type="text" placeholder="ex. shs:2M" className={classes.inputText}/>   
                  </div> </div> </div>   </div> 
        </>
    )
}
