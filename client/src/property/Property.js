import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      background: theme.palette.background.paper,
      textAlign: 'left',
      padding: '0 8px'
    },
    container: {
      minWidth: '100%',
      paddingBottom: '14px'
    },
    gridList: {
      width: '100%',
      minHeight: 200,
      padding: '16px 0 10px'
    },
    title: {
      padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
      color: theme.palette.openTitle,
      width: '100%'
    },
    tile: {
      textAlign: 'center'
    },
    image: {
      height: '100%'
    },
    tileBar: {
      backgroundColor: 'rgba(0, 0, 0, 0.72)',
      textAlign: 'left'
    },
    tileTitle: {
      fontSize:'1.1em',
      marginBottom:'5px',
      color:'rgb(189, 222, 219)',
      display:'block'
    }
  }))

export default function Property(props) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.container}>
            <GridList cellHeight={200} className={classes.gridList} cols={3}>
            {props.searchProperty.map((item, i) => (
              <GridListTile key={i} className={classes.tile}>
                <Link to=''><img className={classes.image} src='' alt={item.name} /></Link>
                <GridListTileBar className={classes.tileBar}
                  title={<Link to='' className={classes.tileTitle}>{item.name}</Link>}
                  subtitle={<span>$ {item.price}</span>}
                />
              </GridListTile>
            ))}
            
          </GridList></div>
            
        </>
    )
}
