import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import bgPic2 from '../assets/images/bgPic2.png'
import Typography from '@material-ui/core/Typography'

import Featured from './Featured'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    
  },
  wraplist: {
    backgroundImage: `url(${bgPic2})`,
    backgroundRepeat: 'repeat',
    boxShadow: '0px 0px 0px 0px'
  },
  listing: {
    // width: '100%',
    padding: '30px 145px'
  },
  title: {
    marginLeft:' 0',
    padding: '0 0 60px 0',
    fontSize: '36px',
    lineHeight: '36px',
    fontFamily: 'ConduitMdITCTTMedium'
  }
}))

export default function FeaturedList(){
  const classes = useStyles()
    return (
        <>
        <div className={classes.root}>
        <Paper className={classes.wraplist}>
        <div className={classes.listing}>
        <Typography variant='h3' className={classes.title}>
        FEATURED LISTINGS
        </Typography>
        <Featured />
        </div>
        </Paper>
        </div>
        </>
    )
}

