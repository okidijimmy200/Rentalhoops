import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import chat from '../assets/images/chat.svg'
import StarPic from '../assets/images/star.svg'
import Card from '@material-ui/core/Card'
import TickPic from '../assets/images/checked.svg'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    
  },
  sectionContent: {
    margin:' 0 auto',
    padding: '3rem 10rem'
  },
  mobileCentered: {
    paddingBottom: '24px',
    fontSize: '42px',
    lineHeight: '42px',
    textTransform: 'uppercase',
    fontFamily: 'ConduitMdITCTTMedium'
  },
  testimonial: {
    margin: '60px 0 40px 0',
    display: 'flex'
  },
  text: {
    width: '67%',
    margin: '0 40px 0 0',
    verticalAlign: 'top',
    display: 'inline-block'
  },
  customer: {
    margin: '0 0 20px 0',
    textAlign: 'left',
    display: 'flex',
  },
  chatBox: {
    width: '42px',
    Height: '42px',
    fill: '#BA265D'
  },
  title: {
    margin: '0 20px',
    fontFamily: 'ConduitMdITCTTMedium',
    fontSize: '36px',
    color: '#ca5376',

  },
  starsOverview: {
    // height: '10px'
    display: 'flex'
  },
  iconStar: {
    height: '20px',
    width: '20px',
  },
  title2: {
    fontFamily: 'ConduitMdITCTTMedium',
    paddingBottom: '12px',
    fontSize: '28px',
    lineHeight: '38px'
  },
  description: {
    paddingBottom:' 18px',
    fontSize:' 18px',
    lineHeight: '30px'
  },
  facts: {
    width: 'calc(32% - 40px)',
    verticalAlign: 'top',
    display: 'flex'
  },
  factList: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    fontFamily: 'ConduitMdITCTTMedium',
    fontSize: '24px',
    lineHeight: '24px',
    boxShadow: '0 2px 5px 0 #ddd',
    height: '113px',
    width: '100%'
    
  },
  display: {
    '&:not(:last-child) ' :{
      marginBottom: '20px'
  }
  },
  tickImg: {
    height:' 20px',
    width: '20px',
    marginRight: '10px'
  }
}))

export default function Testimonial(){
  const classes = useStyles()
    return (
        <>
        <div className={classes.root}>
            <div className={classes.sectionContent}>
                <Typography className={classes.mobileCentered}>
                TESTIMONIALS AND PRESS
                </Typography>
                <div className={classes.testimonial}> 
                    <div className={classes.text}>
                        <div className={classes.customer}>
                            <img src={chat} className={classes.chatBox} alt='pic'/>
                            <div className={classes.title}>
                              <Typography component='h4' >
                                Jimmy Jones O.
                              </Typography>
                            </div>
                            <div className={classes.starsOverview}>
                                    <img src={StarPic} className={classes.iconStar} alt='pic'/>
                                    <img src={StarPic} className={classes.iconStar} alt='pic'/>
                                    <img src={StarPic} className={classes.iconStar} alt='pic'/>
                                    <img src={StarPic} className={classes.iconStar} alt='pic'/>
                                    <img src={StarPic} className={classes.iconStar} alt='pic'/>
                              </div>
                        </div>
                        <Typography component='h2' className={classes.title2}>
                        RentalHoops always puts you first.
                        </Typography>
                        <Typography component='p' className={classes.description} >
                        My experiences with Jimmy have been exceptional. Jimmy was very responsive, 
                        knowledgeable and thorough in listing my condo and helped to get it rented out in record time.
                         She was very friendly, professional, efficient and went above and beyond to even help me install new 
                         light bulbs in my very high ceilings! When I needed to amend the contract on short notice over the holidays for an additional tenant, Natalie was also available. Highly recommend!
                        </Typography>
                    </div>
                    <div className={classes.facts}>
                      {/* <div  style={{width: ''}}> */}
                      <Card  className={classes.factList}>
                            <div className={classes.display}><span><img  src={TickPic} className={classes.tickImg} alt='pic'/></span><span>Responsive</span></div>
                            <div className={classes.display}><span><img  src={TickPic} className={classes.tickImg} alt='pic'/></span><span>Knowledgeable</span></div>
                            <div className={classes.display}><span><img  src={TickPic} className={classes.tickImg} alt='pic'/></span><span>Honest</span></div>
                        </Card>
                      {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

