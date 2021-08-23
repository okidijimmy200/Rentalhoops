import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
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
            height: '100%',
            backgroundColor: '#DCDCDC',
            top:' 0',
            zIndex:' 0'
          },
          data: {
            fontFamily: 'ConduitMdITCTTMedium',
            textAlign: 'left',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            backgroundColor: '#fff',
          },
          location: {
            order: '1',
            marginBottom: '5px',
            backgroundColor: '#DCDCDC',
            width: '100px',
            height: '20px'
          },
          neighbourhood: {
            fontSize:' 20px',
            lineHeight: '20px',
            whiteSpace: 'normal',
            color: '#404040'
          },
          Text: {
            top: '247px',
            height:' 30%',
            width: '100%',
            position: 'absolute',
            backgroundColor: '#fff'
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
            fontSize: '0',
            backgroundColor: '#DCDCDC',
            height: '20px',
            marginBottom: '5px'
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
    }
)) 

export default function Skeleton() {
    const classes = useStyles()
    return (
        <>
        <Grid container spacing={0} >
            {Array(6).fill().map((item, i) => (
                 <Grid item xs={12} sm={6} md={6} style={{marginTop: '5px', marginBottom: '10px'}} key={i} >
                               <Paper className={classes.paper} component='div'>
                                                   <Card className={classes.card}>
                                                   <CardMedia className={classes.media} />
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
                                                       
                                                   </div>
                                                   <div className={classes.listInfo} style={{width: '50%'}}></div>
                                                   <div className={classes.listInfo} style={{width: '80%'}}></div>
                                                   </div>
                                                   </CardContent>
                       
                                                   </Card>
                                                   
                                                   </Paper>
                 </Grid>
            ))}
           
        </Grid>
  
        </>
    )
}
