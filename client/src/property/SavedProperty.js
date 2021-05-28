import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from './../assets/images/search.svg'
import ExpandIcon from './../assets/images/expand.svg'
import Grid from '@material-ui/core/Grid'
import fakeMap from './../assets/images/fake-map2.jpg'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import { SavedProperty } from './api-property'
import auth from './../auth/auth-helper'
import Skeleton from './skeleton'
import Modal from './../components/Modal'
import ImageCards from './ImageCards'
import {SliderData} from './../components/SliderData'
// import jwt from 'express-jwt'

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
        backgroundPosition: 'center center'
    },
    options: {
        height: '37px',
        margin: '0 5px 0 0',
        padding: '0 30px 0 10px',
        fontSize: '14px',
        color: '#404040'
    },
    cardMap: {
        maxWidth: 600,
        margin: 'auto',
    },
    mediaMap: {
        width: '100%',
        height: '81vh',
        marginTop: '-2px'
    },
    paper: {
        // padding: theme.spacing(2),
        height: '355px',
        width: '400px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        boxShadow: '0px 0px 0px 0px',
        margin: 'auto'
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
      },
      
}))

export default function PropertySaved({match}) {
    const classes = useStyles()
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const [search, setSearch]= useState(false)
    const [price, setPrice] = useState(false)
    const [bedrooms, setBedrooms] = useState(false)
    const [count, setCount] = useState('')

    const jwt = auth.isAuthenticated()
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false) ||  setSearch(false) || setPrice(false) || setBedrooms(false)
    }

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
                        <li className={classes.list}>  <button className={classes.saveFilter} >Save</button>                
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
