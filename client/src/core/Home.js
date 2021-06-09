import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import bgImg from './../assets/images/bg.jpg'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import AppBarIntegration from './AppNav'
import ObjectiveInfo from '../pages/objectiveInfo'
import {Link } from 'react-router-dom'
import dotsPic from './../assets/images/3dots.svg'
import FeaturedList from '../pages/featuredList'
import Testimonial from '../pages/testimonial'
import QnA from './../pages/QnA'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    marginTop: '4rem',
    backgroundImage: `linear-gradient(
      to left bottom, 
      rgba(186,83,112, 0.801), 
      rgba(0,4,40, 0.502)
  ), url(${bgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontFamily: 'ConduitMdITCTTMedium',
    paddingBottom: '14px',
    fontSize: '40px',
    lineHeight: '54px'
  },
  contentHome: {
    // height: '834px',
    height: '500px',
    paddingTop: '140px',
    margin: '0px 20px'
  },
  heromain: {
    height: '500px',
    width: '90%',
    maxWidth: '1400px',
    margin: 'auto',
  },
  listingLink: {
    display: 'block',
    color: '#fff',
    width: '100%',
    fontSize: '13px',
    paddingTop: '10px',
    border: '0',
    fontWeight: 'bold',
    cursor: 'pointer',
    paddingLeft: '16px',
    boxSizing: 'border-box'
  },
  dots: {
    top: '772px',
    display: 'flex'
  },
  dotsSub:{
    height: '3rem',
    width: '3rem',
    margin: '0 auto',
    marginBottom: '-1.3rem'
    
  },
  dotsMain: {
    width: '3rem',
    height: '3rem',
    fill: '#BA265D',
    margin:'0 auto'

  }
 
}))

export default function Home(){
  const classes = useStyles()
    return (
      <>
        <Paper className={classes.root}>
          <div className={classes.heromain}>
            <div className={classes.contentHome}>
              <Typography variant='h2' className={classes.title}>
              THE NEW STANDARD OF REAL ESTATE
              </Typography>
              <AppBarIntegration />
              <Typography component={Link} to="/rent"  variant='h2' className={classes.listingLink}>
              Just take me to the listing
              </Typography>
             
          </div>
            </div>
            <div className={classes.dots}>
            <div className={classes.dotsSub}>
                   <img src={dotsPic} className={classes.dotsMain} alt='pic'/>
                </div>
            </div>
        </Paper>
        <ObjectiveInfo />
        <FeaturedList />
        <Testimonial />
        <QnA />
        </>
    )
}

