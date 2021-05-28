import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {readPropertyViews} from './api-property'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: 30,
      marginTop: '80px'
    }
  }))

export default function DetailProperty({ match }) {
    const classes = useStyles()
    const [property, setProperty] = useState([])

    useEffect(() => {
        const abortController =new AbortController()
        const signal = abortController.signal

        readPropertyViews({propertyId: match.params.propertyId}, signal).then((data) => {
            if(data && data.error) {
                console.log(data.error)
            } else {
                setProperty(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [match.params.propertyId])
    return (
        <>
            <div className={classes.root}>
                <h1>{property.name}</h1>
            </div>
        </>
    )
}
