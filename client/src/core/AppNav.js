import React, {useState, useEffect, useRef} from 'react'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({

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
    InputName:{
        padding: '27px 20px',
        alignSelf: 'stretch',
        width: '100%',
        border: 'none',
        '&:focus': {
            outline: '0 !important'
        }
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
    },
    homeSBRight:{
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function AppBarIntegration({classes}) {
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
                    <select className={classes.optionsValue}>
                        <option>Gulu City Center</option>
                        <option>Layibi</option>
                    
                    {/* <div className='homeSBLeft'>
                        test
                    </div> */}
                    </select>
                    </div>
                    <form className={classes.homeSBRight}>
                    <input type='text' className={classes.InputName} placeholder='Enter a neighbourhood, address or agent'/>
                    
                    </form>
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

export default withStyles(styles)(AppBarIntegration)