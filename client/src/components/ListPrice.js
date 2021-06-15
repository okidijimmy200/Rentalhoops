import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { searchPrice } from './../property/api-property'
const queryString = require('query-string');

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
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #fff',
      boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
      width:'40vw',
      height: 'auto',
      margin: '0 auto',
      padding: '40px 20px 20px 20px',
      backgroundColor: '#fff',
      zIndex: 11
    },
}))

export default function ListPrice({history, handleClose}) {
    const classes = useStyles()
    const [priceMin, setpriceMin] = useState('')
    const [priceMax, setpriceMax] = useState('')

    const search = (e) => {
      e.preventDefault()
      if (priceMin.trim() && priceMax.trim()) {
        const query = queryString.stringify({priceMax,priceMin })
          history.push(`/search/price/${query}`)
          handleClose()
      }
      else {
          history.push('/')
      }
  }
    return (
        <>
        <div className={classes.paper}>
           <form className={classes.filterSection} onSubmit={search} >   
                  <h2>PRICE</h2>    
                 <div style={{display: 'flex'}}>                
                 <div className={classes.priceInline}>                         
                 <span>Min Price</span>                          
               <div className="filterInput">                         
               <input 
               onChange={(e) => setpriceMin(e.target.value)}  type="text" placeholder="ex. shs:100K" className={classes.inputText}/>                           
              </div>  </div>                        
               <div className={classes.priceInline} >              
                  <span>Max Price</span>                         
               <div className="filterInput">                       
                    <input
                    onChange={(e) => setpriceMax(e.target.value)}
                    type="text" placeholder="ex. shs:2M" className={classes.inputText}/>   
                  </div> </div>
                   </div>  
                   <button >submit</button>
                   </form> 
                   </div>
        </>
    )
}
