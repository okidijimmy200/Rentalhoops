import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import {Link, useHistory } from 'react-router-dom'
import { favourite } from '../../property/api-property'
import {SliderData} from '../../Components/SliderData/SliderData'
import FeaturedImageCards from './FeaturedCards'

const useStyles = makeStyles(theme => ({ 
  root: {
    flexGrow: 1
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

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item xs={12} sm={6} md={4}  {...props} />;

export default function Featured ({match}){
  const classes = useStyles()

  const [property, setProperty] = useState([])
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  let history = useHistory()

  useEffect(() =>{
    const abortController = new AbortController()
    const signal = abortController.signal

    favourite(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
        // setRedirectToLogin(true)
      } else {
        // console.log(data[0].likes.length)
        setProperty(data)
      }
    })
    return function cleanup() {
      abortController.abort()
    }
  }, [])

  // const addToCart = () => {
  //   history.push(`/savedproperty/${match.params.propertyId}`)
  // }

  return (
      <div className={classes.root}>
    <Container spacing={4}>
      {property.map((property, i) => {
        return <Item key={i}>
          <Link to={"/property/"+property._id} style={{zIndex: -10, position: 'relative'}}>
              <FeaturedImageCards property={property} slides={SliderData} /></Link>
        </Item>
      })}
        
        <div className={classes.btnDiv}>
            <Link to="/about">
        <Button className={classes.btn} >
          Search Apartments
        </Button>
        </Link>
        </div>
    </Container>
  </div>
  )
};

