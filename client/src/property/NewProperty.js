import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-property'
import auth from './../auth/auth-helper'
import {Redirect} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(15),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
    fontSize: '1.2em'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  },
  input: {
    display: 'none'
  },
  filename:{
    marginLeft:'10px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))


export default function NewProduct() {
  const classes = useStyles()
  const [values, setValues] = useState({
      name: '',
      location: '',
      image: '',
      bedRooms: '',
      bathRooms: '',
      familyNumber: '',
      price: '',
      redirect: false,
      error: '',
  })
// authentication
  const jwt = auth.isAuthenticated()

  const handleChange = name => event => {
    // eslint-disable-next-line
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    setValues({...values,  [name]: value })
  }

  const clickSubmit = () => {
    let propertyData = new FormData()
    values.name && propertyData.append('name', values.name)
    values.location && propertyData.append('location', values.location)
    values.image && propertyData.append('image', values.image)
    values.bedRooms && propertyData.append('bedRooms', values.bedRooms)
    values.price && propertyData.append('price', values.price)

    create({
      userId: jwt.user._id
    },{
      t: jwt.token
    },propertyData).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, error: '', redirect: true})
      }
    })
  }

    if (values.redirect) {
      return (<Redirect to={'/'}/>)
    }
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2" className={classes.title}>
            New House Upload
          </Typography><br/>
          <input accept="image/*" onChange={handleChange('image')} className={classes.input} id="icon-button-file" type="file"/>
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="secondary" component="span">
              Upload Photo
              <FileUpload/>
            </Button>
          </label> <span className={classes.filename}>{values.image ? values.image.name : ''}</span><br/>
          {/* <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/> */}
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} select margin="normal">
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="Bungalow">Bungalow</MenuItem>
                <MenuItem value="villas">Villas</MenuItem>
                <MenuItem value="Row houses">Row Houses</MenuItem>
              </TextField><br/>
              
              {/* <GooglePlacesAutocomplete component="TextField"
                  apiKey="AIzaSyAxbWxbdy4SFXMFKAo17i2uBUAlQTUYh7Y"
    /> */}
          <TextField id="location" label="location" className={classes.textField} value={values.location} onChange={handleChange('location')} margin="normal" />
          
          <TextField id="bedRooms" label="Bedrooms" className={classes.textField} value={values.bedRooms} onChange={handleChange('bedRooms')} select margin="normal">
                <MenuItem value="1">1 Room</MenuItem>
                <MenuItem value="2">2 Rooms</MenuItem>
                <MenuItem value="3">3 Rooms</MenuItem>
                <MenuItem value="4">3+ Rooms</MenuItem>
              </TextField><br/>
          <TextField id="bathRooms" label="Bathrooms" className={classes.textField} value={values.bathRooms} onChange={handleChange('bathRooms')} select margin="normal">
                <MenuItem value="1">1 Bathroom</MenuItem>
                <MenuItem value="2">2 Bathrooms</MenuItem>
              </TextField><br/>
          <TextField id="familyNumber" label="Family Number" className={classes.textField} value={values.familyNumber} onChange={handleChange('familyNumber')} select margin="normal">
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Nuclear Family">Nuclear Family</MenuItem>
                <MenuItem value="Big Family">Big Family</MenuItem>
              </TextField><br/>
          {/* <TextField id="price" label="Price" className={classes.textField} value={values.price} onChange={handleChange('price')} type="number" margin="normal"/><br/> */}
          <TextField id="price" label="Price" className={classes.textField} value={values.price} onChange={handleChange('price')} select margin="normal">
                <MenuItem value="100000">SHS:100,000</MenuItem>
                <MenuItem value="200000">SHS:200,000</MenuItem>
                <MenuItem value="300000">SHS:300,000</MenuItem>
                <MenuItem value="500000">SHS:500,000</MenuItem>
                <MenuItem value="800000">SHS:800,000</MenuItem>
                <MenuItem value="1000000">SHS:1,000,000</MenuItem>
                <MenuItem value="1000000">SHS:1,000,000+</MenuItem>
        </TextField><br/>
        
          {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button style={{backgroundColor: 'rgb(186, 38, 93)'}} variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
          {/* <Link to={'/seller/shop/edit/'+match.params.shopId} className={classes.submit}><Button variant="contained">Cancel</Button></Link> */}
        </CardActions>
      </Card>
    </div>)
}