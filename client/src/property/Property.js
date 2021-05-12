import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from './../assets/images/search.svg'
import ExpandIcon from './../assets/images/expand.svg'
import BgPic from './../assets/images/house.jpeg'
import ListingBag from './../assets/images/add-to-listings-bag.svg'
import Favourites from './../assets/images/favorite.svg'
import { Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import fakeMap from './../assets/images/fake-map2.jpg'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import { listAllProperties } from './api-property'
import Skeleton from './skeleton'
import Modal from './../components/Modal'
import { listSearch } from './../store/actions/propertyActions'
import {useDispatch, useSelector } from 'react-redux'

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
      data: {
        padding: '14px 15px 20px 10px',
        fontFamily: 'ConduitMdITCTTMedium',
        color:' #404040',
        textAlign: 'left',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        borderTop: '1px solid #d8d8d8',
        backgroundColor: '#fff',
      },
      location: {
        order: '1',
        marginBottom: '5px'
      },
      neighbourhood: {
        fontSize:' 20px',
        lineHeight: '20px',
        whiteSpace: 'normal',
        color: '#404040'
      },
      Text: {
        top: '231px',
        height:' 30%',
        width: '100%',
        position: 'absolute'
      },
      arrowLeft: {
        borderRadius: '3px',
        padding: '16px 32px',
        fontFamily: 'OpenSans-semibold',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        height: '70%',
        position: 'absolute',
        left: '3px',
        top: '2px'
      },
      arrowWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        right: '0',
        left: '0',
        top: '0',
        bottom: '0'
      },
      arrowRight: {
        borderRadius: '3px',
        padding: '16px 32px',
        fontFamily: 'OpenSans-semibold',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        height: '70%',
        position: 'absolute',
        top: '2px',
        right: '2px'
      },
      hood: {
        fontSize: '14px',
        lineHeight: '18px',
        color: '#767676'
      },
      listInfo: {
        order: '2',
        fontSize: '0'
      },
      price: {
        fontSize: '15px',
        fontWeight: 'bold',
        lineHeight: '20px',
        color:' #404040',
        display:'inline-block'
      },
      summary: {
        fontSize: '14px',
        lineHeight: '14px',
        color: '#767676'
      }
}))

export default function Property({ match }) {
    const classes = useStyles()
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
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

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        listAllProperties(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setLoading(false)
                setProperties(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])

    const keyword = match.params.keyword

    const dispatch = useDispatch()

    const searchList = useSelector(state => state.propertySearch)
    const {property, error} = searchList

    useEffect(() => {
      dispatch(listSearch(keyword))
    }, [dispatch ])
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
                            <span className="results" >0<span> Results</span></span>           
                             </li> 
                                </ul>
                                <Modal open={open} handleClose={handleClose} search={search} price={price} bedrooms={bedrooms}/> 
                </div>
                <section >
                    <Grid container spacing={0} style={{marginTop: '115px'}} >
                            <Grid item xs={12} sm={8} md={8} >
                                {loading  ? <Skeleton /> : 
                                        <Grid container spacing={0}>
                                        {property.map((property, i)=> {
                                                        return <Grid item xs={12} sm={6} md={6} style={{marginTop: '5px', marginBottom: '10px'}} key={i}>
                                                               <Paper className={classes.paper} component='div'>
                                                       <Card className={classes.card}>
                                                       <img className={classes.media}  alt="pic" src={'/api/property/propertyphoto/' + property._id}/>
                                                       <Button component='div' className={classes.arrowLeft} disableRipple>
                                                       <div className={classes.arrowWrap}>
                                                       <svg viewBox="0 0 18 18" role="img" alt='pic' aria-label="Previous" focusable="false" 
                                                       style={{
                                                           display: 'block ',
                                                           fill: 'rgb(255, 255, 255)',
                                                           height: '24px',
                                                           width: '24px'
                                                           }}> 
                                                           <path fillRule="evenodd" d="M13.703 16.293a1 1 0 1 1-1.415 1.414l-7.995-8a1 1 0 0 1 0-1.414l7.995-8a1 1 0 1 1 1.415 1.414L6.413 9l7.29 7.293z">
                                                           </path> </svg>
                                                       </div>
                                                       </Button>
                                                       <Button className={classes.arrowRight} disableRipple>
                                                       <div className={classes.arrowWrap}>
                                                       <svg viewBox="0 0 18 18" role="img" alt='pic' aria-label="Next" focusable="false" style={{
                                                           display: 'block',
                                                           fill:' rgb(255, 255, 255) ',
                                                           height: '24px', 
                                                           width: '24px'
                                                           }}>                    
                                                       <path fillRule="evenodd" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z"></path>                
                                                       </svg>
                                                       </div>
                                                       </Button>
                                                       <CardContent className={classes.Text}>
                                                       <div className={classes.data}>
                                                       <div className={classes.location}>
                                                           <Typography  component="p">
                                                               <span className={classes.neighbourhood}> </span>
                                                           </Typography>
                                                           <Typography className={classes.hood}>
                                                           </Typography>
                                                       </div>
                                                       <div className={classes.listInfo}>
                                                           <Typography className={classes.price}>
                                                           Shs. {property.price}
                                                           </Typography>
                                                           <Typography component='div' className={classes.summary}>
                                                            BD BA  FAMILY
                                                           </Typography>
                                                           
                                                       </div>
                                                       </div>
                                                       </CardContent>
                           
                                                       </Card>
                                                       
                                                       </Paper>
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
