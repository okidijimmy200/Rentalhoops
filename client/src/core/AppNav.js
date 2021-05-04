import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Search from './../components/Search'

const useStyles =makeStyles(theme => ({

    tabContent: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        width: '100%',
        boxShadow: '0 0 25px 0 rgb(64 64 64 / 50%)',
        flex: '0 0 15%'
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px 0px',
        height: '40px',
        margin: '14px 0'
    },
    main:{
        position: 'relative',
        display: 'flex',
        backgroundColor: '#fff',
        maxWidth: '800px',
        height: '70px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionsValue: {
        height: '35px',
        margin: '0',
        paddingTop: '0',
        paddingBottom: '0',
        fontFamily: 'OpenSans-semibold',
        fontSize: '15px',
        lineHeight: '40px',
        verticalAlign: 'middle',
        border: '10px solid #fff',
        backgroundColor:' #fff',
        color: '#404040',
       '&:focus' :{
           outline:'0 !important'
        }       
    }
}))

export default function AppBarIntegration() {
    const classes = useStyles()
    const [value, setValue] = useState(0);
    
    const onChange = (e, value) => {
        setValue(value)
    };
   

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar} >
                <Tabs value={value} onChange={onChange}>
                    <Tab label="Rent" />
                    <Tab label="Buy" />
                    <Tab label="Sell" />
                </Tabs>

            </AppBar>
            {value === 0 && (
                <div className={classes.main} >
                    <div className={classes.tabContent}>
                    <select className={classes.optionsValue}
                    // value={searchValue.category}

                    >
                        <option>Gulu City Center</option>
                        <option>Metroplitan Gulu</option>
                    
                    {/* <div className='homeSBLeft'>
                        test
                    </div> */}
                    </select>
                    </div>
                   <Search />
                    
                </div>
            )}
            {/* {value === 1 && (
                <Typography component='div' className={classes.tabContent}>
                    Item two
                </Typography>
            )}
            {value === 3 && (
                <Typography component='div' className={classes.tabContent}>
                    Item three
                </Typography>
            )} */}
        </div>
    )
}
