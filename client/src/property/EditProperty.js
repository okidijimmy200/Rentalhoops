import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {update, readPropertyViews} from './api-property'
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
  uploadPic: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))


export default function EditProperty({ match }) {
  const classes = useStyles()
  const [values, setValues] = useState({
      name: '',
      location: '',
      imagePrimary: '',
      imageSecondary: '',
      imageTetiary: '',
      bedRooms: '',
      bathRooms: '',
      familyNumber: '',
      price: '',
      category: '',
      redirect: false,
      error: '',
  })
// authentication
  const jwt = auth.isAuthenticated()

 
  const handleChange = name => event => {
    if(name  === 'imagePrimary') {
      setValues({...values, [name]: event.target.files[0]})
    }
    else if (name  === 'imageSecondary') {
      setValues({...values, [name]: event.target.files[0]})
    }
    else if (name  === 'imageTetiary' ) {
      setValues({...values, [name]: event.target.files[0]})
    }
    else {
      setValues({...values,[name] : event.target.value})
    }
  }

  useEffect(() => {
      const abortController = new AbortController()
      const signal = abortController.signal

      readPropertyViews({
          propertyId: match.params.propertyId
      },  signal).then((data) => {
          if (data && data.error) {
              setValues({...values, error: data.error})
          } else {
              setValues({...values, 
                name: data.name, 
                location:data.location, 
                bedRooms: data.bedRooms, 
                familyNumber: data.familyNumber,
                price: data.price,
                category: data.category,
                bathRooms: data. bathRooms

            })
            console.log(data)
          }
      })
      return function cleanup() {
        abortController.abort()
    }
  }, [match.params.propertyId])


  const clickSubmit = () => {
    let propertyData = new FormData()
    values.name && propertyData.append('name', values.name)
    values.location && propertyData.append('location', values.location)
    values.imagePrimary && propertyData.append('imagePrimary', values.imagePrimary)
    values.imageSecondary && propertyData.append('imageSecondary', values.imageSecondary)
    values.imageTetiary && propertyData.append('imageTetiary', values.imageTetiary)
    values.bedRooms && propertyData.append('bedRooms', values.bedRooms)
    values.price && propertyData.append('price', values.price)
    values.bathRooms && propertyData.append('bathRooms', values.bathRooms)
    values.familyNumber && propertyData.append('familyNumber', values.familyNumber)
    values.category && propertyData.append('category', values.category)
    
    update({
      userId: match.params.userId,
      propertyId: match.params.propertyId
    },{
      t: jwt.token
    },propertyData).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, 'redirect': true})
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
            Update House Details
          </Typography><br/>
          <div className={classes.uploadPic}>
          <input accept="image/*" multiple onChange={handleChange('imagePrimary')} className={classes.input} id="icon-button-file" type="file"/>
          <div>
          <label htmlFor="icon-button-file">
            <Button variant="contained" color="secondary" component="span">
              Upload Photo 1
              <FileUpload/>
            </Button>
          </label>
          <div className={classes.filename}>{values.imagePrimary ? values.imagePrimary.name : ''}</div><br/>
          </div>
           <div>
           <input accept="image/*" multiple onChange={handleChange('imageSecondary')} className={classes.input} id="icon-button-file-1" type="file"/>
          <label htmlFor="icon-button-file-1">
            <Button variant="contained" color="secondary" component="span">
              Upload Photo 2
              <FileUpload/>
            </Button>
          </label>
          <div className={classes.filename}>{values.imageSecondary ? values.imageSecondary.name : ''}</div><br/>
           </div>
          <div>
          <input accept="image/*" multiple onChange={handleChange('imageTetiary')} className={classes.input} id="icon-button-file-2" type="file"/>
          <label htmlFor="icon-button-file-2">
            <Button variant="contained" color="secondary" component="span">
              Upload Photo 3
              <FileUpload/>
            </Button>
          </label>
          <div className={classes.filename}>{values.imageTetiary ? values.imageTetiary.name : ''}</div><br/>
          </div>
          </div>
 
          {/* <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/> */}
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} select margin="normal">
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="Bungalow">Bungalow</MenuItem>
                <MenuItem value="villas">Villas</MenuItem>
                <MenuItem value="RowHouses">Row Houses</MenuItem>
              </TextField><br/>
              
              {/* <GooglePlacesAutocomplete component="TextField"
                  apiKey="AIzaSyAxbWxbdy4SFXMFKAo17i2uBUAlQTUYh7Y"
    /> */}
          <TextField id="location" label="location" className={classes.textField} value={values.location} onChange={handleChange('location')} margin="normal" />

          <TextField id="category" label="category" className={classes.textField} value={values.category} onChange={handleChange('category')} select margin="normal">
                <MenuItem value="GuluCity">Gulu City</MenuItem>
                <MenuItem value="MetroplitanGulu">Metropolitan Gulu</MenuItem>
              </TextField><br/>

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
                <MenuItem value="Nuclear">Nuclear Family</MenuItem>
                <MenuItem value="Big">Big Family</MenuItem>
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
          <Button style={{backgroundColor: 'rgb(186, 38, 93)'}} variant="contained" onClick={clickSubmit} className={classes.submit}>Update</Button>
          {/* <Link to={'/seller/shop/edit/'+match.params.shopId} className={classes.submit}><Button variant="contained">Cancel</Button></Link> */}
        </CardActions>
      </Card>
    </div>)
}