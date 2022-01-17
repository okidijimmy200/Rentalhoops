import React, {useState} from 'react'
import { Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Search from './../Components/Search/Search'

const useStyles =makeStyles(theme => ({
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px 0px',
        height: '40px',
        margin: '14px 0'
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
                </Tabs>

            </AppBar>
            {value === 0 && (
                <Route render={({history}) => <Search history={history}/>}/>
                  
                   
                    
            )}
        </div>
    )
}
