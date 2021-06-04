import React, {useState,  useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { searchProperty, listCategories } from './../property/api-property'
import { Redirect } from 'react-router-dom'
import Property from './../property/Property'

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
    tabContent: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        width: '100%',
        boxShadow: '0 0 25px 0 rgb(64 64 64 / 50%)',
        flex: '0 0 15%'
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
    main:{
        position: 'relative',
        display: 'flex',
        backgroundColor: '#fff',
        maxWidth: '800px',
        height: '70px',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const Search = ({ history }) =>  {
    const classes =useStyles()
    const [values, setValues] = useState({
        category: 'GuluCity',
        search: '',
        results: [],
        searched: false,
    })
    const [categories, setCategories] = useState([])
    const [keyword, setKeyWord] = useState('')

    const handleChange = name => event => {
        setValues({
            ...values, [name]: event.target.value,
            
        })
        console.log(event.target.value)
    }

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        listCategories(signal).then((data) => {
            if(data.error) {
                console.log(data.error)
            } else {
                setCategories(data)
                console.log(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])

    const search = () => {
        // e.preventDefault()
        if (keyword.trim() && values.category) {
            history.push(`/search/${keyword}&${values.category}`)
        
        }
        else {
            history.push('/')
        }
    }


    const enterKey = (event) => {
        if(event.keyCode == 13){
            event.preventDefault()
            search()
        }
    }
    return (
        <>
        <div className={classes.main} >
            <div className={classes.tabContent}>
                    <select className={classes.optionsValue}
                    value={values.category}
                    onChange={handleChange('category')}
                    >
                        {categories.map(item => (
                             <option key={item}>{item}</option>
                        ))}
                       
                    </select>
                    </div>

             <form className={classes.homeSBRight} onSubmit={search}>
                    <input type='text' className={classes.InputName}
                     placeholder='Enter a neighbourhood, address or agent'
                     onChange={(e) => setKeyWord(e.target.value)}
                     />
            </form>
                   
                    </div>
                    <div>
                    </div>
        </>
    )
}

export default Search;