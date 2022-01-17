import React, { useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'

import fakeMap from './../../assets/images/fake-map2.jpg'
import { roomSearch } from './../../Store/actions/propertyActions'
import ImageCards from '../../Components/Property/ImageCard/ImageCards'
import {SliderData} from '../../Components/SliderData/SliderData'
import SearchNav from './../../Components/SearchNav/SearchNav'

const useStyles = makeStyles(theme => ({
    cardMap: {
        maxWidth: 600,
        margin: 'auto',
    },
    mediaMap: {
        width: '100%',
        height: '81vh',
        marginTop: '-2px'
    },
      card: {
        height: '355px',
        width: '100%',
        margin: '0',
        padding: '0',
        border: '1px solid #d8d8d8',
        backgroundColor: '#fff',
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0px 0px 0px 0px'
      },
      media:{
        width:' 100%',
        height: '70%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top:' 0',
        zIndex:' 0'
      },
      
}))

export default function RoomSearch({ match }) {
    const classes = useStyles()
    // const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const roomNumber = match.params.roomNumber

    const roomPrice = useSelector(state => state.roomSearchList)
    const {propertyRooms, error} = roomPrice

    useEffect(() => {
        dispatch(roomSearch(roomNumber))
    }, [dispatch,roomNumber])
    return (
        <>
            <SearchNav />
                <section >
                    <Grid container spacing={0} style={{marginTop: '115px'}} >
                            <Grid item xs={12} sm={8} md={8} >
                                {/* {loading  ? <Skeleton /> :  */}
                                        <Grid container spacing={0}>
                                        {propertyRooms.map((property, i)=> {
                                            return <Grid item xs={12} sm={6} md={6} style={{marginTop: '5px', marginBottom: '10px'}} key={i}>            
                                                       <ImageCards property={property} slides={SliderData}/>
                                                    </Grid>
                                        })}
                                    </Grid>
                                {/* }    */}
                          </Grid>
                          <Grid item xs={12} md={4} sm={4}>
                                <Card className={classes.cardMap}>
                                    <CardMedia
                                    className={classes.mediaMap}
                                    image={fakeMap} 
                                    style={{position: 'fixed'}}
                                    />
                                </Card>
                         </Grid>
                    </Grid>
                    
                </section>
                              
        </>
    )
}
