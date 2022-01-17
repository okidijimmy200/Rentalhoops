import React, {useState} from 'react'
import {Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import SearchIcon from './../../assets/images/search.svg'
import ExpandIcon from './../../assets/images/expand.svg'
import Modal from '../Modal/Modal'
import auth from '../../Auth/auth-helper'


const useStyles = makeStyles(theme => ({ 
    root: {
        marginTop: '-51px',
        fontSize: '14px',
        backgroundColor:' #fff',
        borderBottom: '1px solid #d8d8d8',
        // position: 'relative',
        color:' #404040',
        position: 'fixed',
        zIndex: 1100,
        width: '100%'
    },
    justifiedListBig: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonSearchIcon: {
        border: 'none',
        backgroundImage: `url(${SearchIcon})`,
        backgroundSize:' 24px',
        width: '40px',
        height: '37px',
        marginLeft: '-1px',
        // border: '1px solid #d8d8d8',
        backgroundColor: 'transparent',
        // backgroundSize: '24px 24px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        cursor: 'pointer'
    },
    filter: {
        paddingRight: '16px',
        backgroundColor: 'transparent',
        backgroundSize: '10px',
        backgroundImage: `url(${ExpandIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 22px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        height: '48px',
        margin: '0'
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        height: '48px',
        margin: 0
    },
    saveFilter: {
        paddingRight: '8px',
        color: '#767676',
        cursor: 'default',
        fontSize: '12px',
        border: '0',
        width: 'auto',
        padding: '3px 7px 0 7px',
        fontWeight: 'bold',
        height: '37px',
        marginLeft: '-1px',
        backgroundColor: 'transparent',
        backgroundSize: '24px 24px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        cursor: 'pointer'
    },
    options: {
        height: '37px',
        margin: '0 5px 0 0',
        padding: '0 30px 0 10px',
        fontSize: '14px',
        color: '#404040'
    }
}))

export default function SearchNav({count, match}) {
    let history = useHistory();
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [search, setSearch]= useState(false)
    const [price, setPrice] = useState(false)
    const [bedrooms, setBedrooms] = useState(false)
  

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false) ||  setSearch(false) || setPrice(false) || setBedrooms(false)
    }

    return (
        <>
               <div className={classes.root} >
          <ul className={classes.justifiedListBig} style={{
              margin: '0',
              padding: '0 10px',
            fontSize: '14px}',
            listStyle: 'none'}}>            
          <li className={classes.list} onClick={() => setSearch(!search)}><button className={classes.buttonSearchIcon}>
          {/* <Modal search={search} handleCloseBtn={handleCloseBtn}/> */}
          </button>
          </li> 
          <li className={classes.filter} onClick={() => setOpen(!open)}>Neighborhoods</li>   
                         
              <li className={classes.filter} onClick={() => setPrice(!price)}>Price</li>                        
              <li className={classes.filter} onClick={() => setBedrooms(!bedrooms)} >Bedrooms</li>                        
              {/* <li className={classes.filter} >More Filters</li>     */}
                        <li className={classes.list}>
                            {!auth.isAuthenticated() && (
                                 <button className={classes.saveFilter} >Save</button>
                            )}
                            {auth.isAuthenticated() && (
                                      <Link to={'/saved/' + auth.isAuthenticated().user._id}>
                                      <button className={classes.saveFilter} >Save</button>
                                      </Link>
                            ) }
                          
                             
                                             
                        <button className={classes.saveFilter} style={{color: '#404040'}}>Clear</button>            
                        </li>            <li className={classes.list}>                
                            <select className={classes.options}>
                                <option value="has_photo,listing_listed_date,desc">Sort: Default</option>
                                <option value="listing_listed_date,desc">Newest</option>
                                <option value="last_updated_on,desc">Last Updated</option>
                                <option value="listing_price,desc">$ High to Low</option>
                                <option value="listing_price">$ Low to High</option>
                                </select>                
                            <select className={classes.options}>
                                <option value="photos">Photo: Default</option>
                                <option value="floorplans">Floorplans</option>
                            </select>                
                            <span className="results" >{count}<span> Results</span></span>           
                             </li> 
                                </ul>
                                <Modal open={open} handleClose={handleClose} search={search} price={price} bedrooms={bedrooms}/> 
                </div>
        </>
    )
}
