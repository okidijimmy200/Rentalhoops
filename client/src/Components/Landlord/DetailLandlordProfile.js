import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Edit from '@material-ui/icons/Edit'
import Person from '@material-ui/icons/Person'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles(theme => ({ 
    rootProfile: theme.mixins.gutters({
        maxWidth: 1050,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(1)
        
      }),
      titleProfile: {
        marginTop: theme.spacing(3),
        color: theme.palette.protectedTitle
      },
}))

export default function DetailLandlordProfile({property}) {
    const classes = useStyles()
    return (
        <>
         <div className={classes.wrapLandlord}> 
            <Paper className={classes.rootProfile} elevation={4}>
                <Typography variant="h6" className={classes.titleProfile}>
                Landlord Detail
                </Typography>
                <List dense>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <Person/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={property.owner.name} secondary={property.owner.email}/><ListItemSecondaryAction>
                    <Link to=''>
                    <IconButton aria-label="Edit" color="primary">
                        <Edit/>
                    </IconButton>
                    </Link>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemText/>
            </ListItem>
            </List>

            </Paper>
         </div> 
        </>
    )
}
