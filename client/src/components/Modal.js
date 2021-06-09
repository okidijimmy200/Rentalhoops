import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import { useSpring, animated } from 'react-spring';
import MenuItem from '@material-ui/core/MenuItem'
import Search from './Search'
import ListPlaces from './ListPlaces'
import ListPrice from './ListPrice'

import { Route} from 'react-router-dom'
import './style.css'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // top: '112px !important',

        '&:focus': {
            outline: 'none'

        }
        
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
      neighborhoodFilter: {
          border:'none',
          padding: 0
      },
      leftAligned: {
        margin: '10px 0',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'left',
        padding: 0,
        listStyle: 'none'
      },
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
 
      filterMulti: {
        margin: '10px 0',
        display: 'flex',
        flexWrap: 'wrap',
        padding:' 0',
        listStyle: 'none'
      }
}))


const Fade = React.forwardRef(function Fade(props, ref) {
        
    const {in: open, children, onEnter, onExited, ...other } = props
    const style = useStyles({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onReset: () => {
            if (!open && onExited) {
                onExited();
            }
        }
    });
    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func
}

export default function ModalFun(props) {
    const classes = useStyles()
    return (
        <>
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={props.open || props.search || props.price || props.bedrooms} 
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          
           <Fade >
           { props.open  && (
      <div className={classes.paper}>
        <ListPlaces />
        </div>
               ) }
        {props.search &&(
        <Route render={({history}) => <Search history={history}/>}/>
                    )}
            {props.price && (
              <div className={classes.paper}>
                 <ListPrice />   
                </div>
                          
                    )}
                    {props.bedrooms && (
                      <div className={classes.paper}>
                        <div className={classes.filterSection}>                   
                             <h2>BEDROOMS</h2>                        
                             <ul className={classes.filterMulti}>               
                                          <li className={classes.neighbourList}>               
                                      <span >Studio</span> 
                                    </li> 
                                <li className={classes.neighbourList}>
                                  <span>1</span>    
                              </li>    
                              <a href='/search/2' >      
                              <li className={classes.neighbourList}>        
                                <span>2</span>  
                                  </li>    </a>        
                                  <li className={classes.neighbourList}>           
                                    <span>3</span> </li>  
                              <li className={classes.neighbourList}>  
                                <span>4</span> 
                            </li>     
                            <li className={classes.neighbourList}>   
                              <span >5+</span>            
                              </li> </ul> 
                        </div>
                      </div>
                    )}
        </Fade>
       
      </Modal>
      
            
        </>
    )
}
