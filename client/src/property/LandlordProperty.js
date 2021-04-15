import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import auth from './../auth/auth-helper'
import { listByLandlord} from './../property/api-property'
import {Redirect} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

// styling the component
const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(12)
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px`,
        color: theme.palette.protectedTitle,
        fontSize: '1.2em'
    },
    addButton: {
        float: 'right'
    },
    leftIcon: {
        marginRight: '8px'
    },
    avatar: {
        borderRadius: 0,
        width: 65,
        height: 40
    },
    listText: {
        marginLeft: 15
    },
    paper: {
        // padding: theme.spacing(2),
        height: '355px',
        width: 'auto',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        boxShadow: '0px 0px 0px 0px'
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
      },
      btn: {
        minWidth: '280px',
        color: '#fff',
        backgroundColor: '#BA265D',
        textAlign: 'center',
        width:' 100%',
        maxWidth: '325px',
        whiteSpace: 'nowrap',
        borderRadius: '3px',
        padding: '16px 32px',
        fontFamily: 'OpenSans-semibold',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#ca5376'
        }
      },
      btnDiv: {
        width: '100%',
        margin: '45px auto 0 auto',
        textAlign: 'center'
      },
      gridRoot: {
          display: 'flex'
      }
}))

export default function LandlordProperty() {
    const classes = useStyles()
    const [property, setProperty] = useState([])
    const [redirectToSignin, setRedirectToSignin] = useState(false)
    const jwt = auth.isAuthenticated()

    //fetch the list property API
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        listByLandlord({
            userId: jwt.user._id
        }, {t: jwt.token}, signal).then((data) => {
            if (data.error) {
                setRedirectToSignin(true)
            } 
            else {
                setProperty(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
       // eslint-disable-next-line 
    }, [jwt.user._id])
    

    if (redirectToSignin) {
        return <Redirect to='/login/' />
    }
    return (
        <>
        <Paper style={{boxShadow: '0 0 0 0'}}>
            <Typography>
                Your Properties
            </Typography>
            <Grid container spacing={4} className={classes.gridRoot}> 
                {property.map((property, i) => {
                    return <Grid item xs={12} sm={12} md={6} key={i}>
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
                                    <span className={classes.neighbourhood}> {property.name}</span>
                                </Typography>
                                <Typography className={classes.hood}>
                                    {property.location}
                                </Typography>
                            </div>
                            <div className={classes.listInfo}>
                                <Typography className={classes.price}>
                                Shs. {property.price}
                                </Typography>
                                <Typography component='div' className={classes.summary}>
                                {property.bedRooms} BD {property.bathRooms} BA {property.familyNumber} FAMILY
                                </Typography>
                                
                            </div>
                            </div>
                            </CardContent>

                            </Card>
                            
                            </Paper>
                    </Grid>
                })}
            </Grid>
        </Paper>
            
        </>
    )
}


