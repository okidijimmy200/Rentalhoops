import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({ 
    card: {
        marginBottom: '20px'
    },
    expand: {
        marginLeft: 'auto'
    },
    title: {
        paddingBottom: '24px',
        fontSize: '42px',
        lineHeight: '42px',
        textTransform: 'uppercase',
    },
    qtn: {
      margin:  '20px 50px 0 ',
      color: '#000'
    }, 
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))


const ExpandIcon = ({ expanded}) => 
    expanded ? <RemoveIcon /> : <AddIcon />


export default function Question({item}) {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }
 
    return (
        <>
            <div className={classes.wrapper}>
                    <CardContent>
                    <h3 className={classes.qtn}>{item.title}</h3>
                    </CardContent>
                    <CardActions disableActionSpacing>
                    <IconButton
                    className={classes.expand}
                    onClick={toggleExpanded}
                    >
                    <ExpandIcon expanded={expanded} />
                    </IconButton>
            </CardActions>
                </div>
            
                    <Collapse in={expanded}>
                    <CardContent>
                        <Typography>
                        {item.desc}
                        </Typography>
                    </CardContent>
                    </Collapse>
          
        </>
    )
}
