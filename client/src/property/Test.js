import React, {useState} from 'react'
import { like, unlike} from './api-property'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import IconButton from '@material-ui/core/IconButton'
import auth from '../Auth/auth-helper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({ 
    button: {
        margin: theme.spacing(1),
        height: '10px',
        width: '10px',
        padding: '0'
       },
}))

export default function Test(props) {
    const classes = useStyles()
    const jwt = auth.isAuthenticated()

    const checkLike = (likes) => {
        // if (!likes) {return;}
        let match = likes.indexOf(jwt.user._id) !== -1
        return match
      }
  
      const [values, setValues] = useState({
        like: checkLike(props.property.likes),
        likes: props.property.likes.length,
      })
  
      const clickLike = (e) => {
        e.preventDefault()
        let callApi = values.like ? unlike : like 
        callApi({
          userId: jwt.user._id
        }, {
          t: jwt.token
        }, props.property._id).then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            setValues({ ...values, like: !values.like, likes: data.likes.length})
          }
        })
      }
    return (
        <>
                 {values.like ? 
                        <IconButton onClick={clickLike} className={classes.button} aria-label="Like" color="secondary">
                        <FavoriteIcon />
                      </IconButton>
                        : <IconButton onClick={clickLike} className={classes.button} aria-label="Unlike" color="secondary">
                            <FavoriteBorderIcon />
                        </IconButton>
              } <span>{values.like}</span>          
        </>
    )
}
