import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from './../assets/images/search.svg'
import ExpandIcon from './../assets/images/expand.svg'
import BgPic from './../assets/images/house.jpeg'
import ListingBag from './../assets/images/add-to-listings-bag.svg'
import Favourites from './../assets/images/favorite.svg'
import { Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        fontSize: '14px',
        backgroundColor:' #fff',
        borderBottom: '1px solid #d8d8d8',
        position: 'relative',
        color:' #404040'
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
    cardWrap: {
        height: '100%',
        width: '30%',
        position: 'relative',
        display: 'block',
        display: 'flex',
        zIndex: '0',
        textDecoration: 'none',
        color: '#404040',
        alignContent: 'center',
        cursor: 'pointer',

    },
    listingCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '10px 50px 10px 35px',
        border: 'none',
        borderTop: '1px solid #d8d8d8',
        borderBottom: '1px solid #d8d8d8',
        borderRight: '1px solid #d8d8d8',
        background: '#fff'
    },
    thumbnail: {
        width: '70px',
        minWidth: '70px',
        height: '70px',
        margin: 'auto 0',
        border: '1px solid #d8d8d8',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'static',
        backgroundImage: `url(${BgPic})`
    },
    data: {
        width: 'auto',
        height: '100%',
        padding: '0 24px 0 10px',
        whiteSpace: 'inherit',
        border: 'none',
        position: 'relative',
        justifyContent: 'center'
    },
    location: {
        order: 1,
        color: '#404040',
        textAlign: 'left',
        textTransform: 'uppercase'
    },
    listInfo: {
        order:' 2',
    },
    listingStatus: {
        order: '3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '4px'
    },
    addToListingBag: {
        backgroundColor: 'transparent',
        position: 'absolute',
        backgroundSize: '20px',
        width: '32px !important'
    },
    lbAdd: {
        backgroundImage: `url(${ListingBag})`,
        backgroundColor: 'transparent',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px',
        width: '32px',
        height: '32px',
        borderWidth: '0',
        padding: '0 !important',
        outline: 'none'
    },
    favorites: {
        width: '40px',
        height: '40px',
        margin: 'auto',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'absolute',
        bottom: '0',
        right: 0,
        // backgroundImage: `url(${Favourites})`
    },
    Favourite: {
        width: '17px',
        height: '15px',
        display: 'block'
    },
    selection: {
        padding: '0 10px',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
        width: '40px !important',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        position: 'absolute'
    },
    listingCollection: {
        display:'none',
        fontSize: '16px',
        cursor: 'pointer'
    }
    
}))

export default function RentalProperty() {
    const classes = useStyles()
    return (
        <>
        <div className={classes.root}>
          <ul className={classes.justifiedListBig} style={{
              margin: '0',
              padding: '0 10px',
            fontSize: '14px}',
            listStyle: 'none'}}>            
          <li className={classes.list}><button className={classes.buttonSearchIcon}></button>
          </li> 
          <li className={classes.filter} >Neighborhoods</li>                    
              <li className={classes.filter} >Price</li>                        
              <li className={classes.filter} >Bedrooms</li>                        
              <li className={classes.filter} >More Filters</li>    
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
                </div>
                <section>
                    <Link className={classes.cardWrap}>
                <div className={classes.listingCard} title="Kent Ave">  
                  <div className={classes.thumbnail} >
                      </div>    
                  <div className={classes.data}> 
                             <div className={classes.location}>        
                                     <p class="address" >Kent Ave</p>      
                                               <p class="neighborhood" >Williamsburg, Brooklyn</p>       
                                                    </div>        
                            <div className={classes.listInfo}>  
                             <p class="price" >$5,096</p>        
                                     <p class="summary"> <span >2 BD, </span>           
                                              <span >2 BA, </span>        
                                                          <span >0 SF, </span>       
                                                                       <span >rental property</span>  </p> </div>
                                <div className={classes.listingStatus}> </div>   
                                </div></div>
                                <div className={classes.addToListingBag}
                                style={{
                                    bottom: 0,
                                    right: '28px',
                                    cursor: 'pointer'
                                }}
                                >   
                                 <button style={{cursor: 'pointer'}} className={classes.lbAdd}></button></div>

                                 <div className={classes.favorites}>
                                     <img className={classes.Favourite} src={Favourites} alt='pic' />
                                 </div>
                                 <div className={classes.selection} 
                                 style={{
                                    bottom: 0,
                                    right: '28px'
                                 }}
                                 >     
                                    <input className={classes.listingCollection} type="checkbox" /></div>
                             
                                 
                                </Link>
                </section>
                                
        </>
    )
}
