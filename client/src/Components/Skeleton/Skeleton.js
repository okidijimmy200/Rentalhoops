import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { useStyles } from './__Styles'

export default function Skeleton(props) {
    const classes = useStyles(props)
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
