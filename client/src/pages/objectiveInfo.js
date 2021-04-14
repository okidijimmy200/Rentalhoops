import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {Link } from 'react-router-dom'
import ObjectiveTabs from './objectiveTabs'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2.5rem 10rem',
    position: 'relative'
  },
  sectionContent: {
    margin:'0 auto'
  },
  title: {
    paddingBottom: '24px',
    fontSize: '36px',
    lineHeight: '42px',
    textTransform: 'uppercase',
    fontFamily: 'ConduitMdITCTTMedium'
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
  }
}))

export default function ObjectiveInfo(){
  const classes = useStyles()
    return (
        <>
    <div className={classes.root}>
        <div className={classes.sectionContent}>
            <Typography className={classes.title}>
                dicover our difference
            </Typography>
            <ObjectiveTabs />
            <div className={classes.btnDiv}>
            <Link to="/about">
        <Button className={classes.btn} >
          Learn More
        </Button>
        </Link>
        </div>
        </div>
    </div>
        </>
    )
}

