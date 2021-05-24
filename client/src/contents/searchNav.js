import React from 'react'

export default function searchNav() {
    return (
        <>
        <ul className={classes.justifiedListBig} style={{
              margin: '0',
              padding: '0 10px',
            fontSize: '14px}',
            listStyle: 'none'}}>            
          <li className={classes.list} onClick={() => setSearch(!search)}><button className={classes.buttonSearchIcon}>
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
        </>
    )
}
