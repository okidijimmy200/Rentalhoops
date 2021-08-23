import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import { useSpring, animated } from 'react-spring';
import MenuItem from '@material-ui/core/MenuItem'
import ListSearch from '../Tenants/ListSearch'
import ListPlaces from '../Tenants/ListPlaces'
import ListPrice from '../Tenants/ListPrice'
import ListRoom  from '../Tenants/ListRoom';
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
    // children: PropTypes.element,
    // in: PropTypes.bool.isRequired,
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
        <ListPlaces handleClose={props.handleClose}/>
        </div>
               ) }
        {props.search &&(
        <Route render={({history}) => <ListSearch handleClose={props.handleClose} history={history}/>}/>
                    )}
            {props.price && (
              
                 <Route render={({history}) => <ListPrice  handleClose={props.handleClose} history={history}/>}/>      
                    )}
                    {props.bedrooms && (
                       <Route render={({history}) => <ListRoom handleClose={props.handleClose} history={history}/>}/> 
                    )}
        </Fade>
       
      </Modal>
      
            
        </>
    )
}
