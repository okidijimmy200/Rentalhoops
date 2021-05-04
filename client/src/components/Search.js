import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { searchProperty } from './../property/api-property'
import RentalProperty from './../property/RentalProperty'

const useStyles = makeStyles(theme => ({
    homeSBRight:{
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center'
    }, InputName:{
        padding: '27px 20px',
        alignSelf: 'stretch',
        width: '100%',
        border: 'none',
        '&:focus': {
            outline: '0 !important'
        }
    },
}))

export default function Search() {
    const classes =useStyles()
    const [value, setValue] = useState({
        category: '',
        search: '',
        results: [],
        searched: false
    })

    const handleChange = name => event => {
        setValue({
            ...value, [name]: event.target.value,
            
        })
    }

    const search = () => {
        if(value.search){
            searchProperty({
                //params passed to be searched ie text
                search: value.search || undefined, category: value.category
            }).then((data) => {
                if(data.error) {
                    console.log(data.error)
                } else {
                    setValue({...value, results: data, searched: true})
                }
            })
        }
    }

    const enterKey = (event) => {
        if(event.keyCode ==13){
            event.preventDefault()
            search()
        }
    }
    return (
        <>
             <form className={classes.homeSBRight} onSubmit={search}>
                    <input type='text' className={classes.InputName}
                     placeholder='Enter a neighbourhood, address or agent'
                     onKeyDown={enterKey}
                     onChange={handleChange('search')}
                     />
                    
                    </form>
        </>
    )
}
