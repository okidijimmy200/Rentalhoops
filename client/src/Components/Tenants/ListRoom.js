import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
const queryString = require('query-string');


const useStyles = makeStyles((theme) => ({ 
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #fff',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        width:'40vw',
        height: 'auto',
        margin: '0 auto',
        padding: '40px 20px 20px 20px',
        backgroundColor: '#fff',
        zIndex: 11
      },
      neighborhoodFilter: {
          border:'none',
          padding: 0
      },
      leftAligned: {
        margin: '10px 0',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'left',
        padding: 0,
        listStyle: 'none'
      },
      neighbourList: {
        height: '50px',
        padding: '0 20px',
        margin: 0,
        fontFamily: 'OpenSans-regular,sans-serif',
        fontSize: '14px',
        lineHeight: '50px',
        color: '#acacac',
        textAlign: 'center',
        verticalAlign: 'middle',
        border: '1px solid #d4d4d4',
        display: 'inline-block',
        cursor:' pointer',
        marginRight: '-1px',
        marginTop: '-1px'
      },
    
      filterMulti: {
        margin: '10px 0',
        display: 'flex',
        flexWrap: 'wrap',
        padding:' 0',
        listStyle: 'none'
      }
}))



export default function ListRoom({history}) {
    const classes = useStyles()
    const [values, setValues] = useState({
        studio: 'studio',
        first: 1,
        two: 2,
        three: 3,
        four: 4
    })

const handleChange =(e) => {
        const value = e.currentTarget.title
        setValues({...values, value})
        console.log(e.currentTarget.title); 
        e.preventDefault()
        if (values.studio) {
            const roomNumber = queryString.stringify({rooms:values.studio})
            history.push(`/search/roomnumber/${roomNumber}`)
        }
        else {
            history.push('/')
        }
       
        
 }
          const handleChange1 =(e) => {
            const value = e.currentTarget.title
            setValues({...values, value})
            console.log(e.currentTarget.title); 
            e.preventDefault()
            if (values.first) {
                const roomNumber = values.first
                history.push(`/search/roomnumber/${roomNumber}`)
            }
            else {
                history.push('/')
            }
}
const handleChange2 =(e) => {
  const value = e.currentTarget.title
  setValues({...values, value})
  console.log(e.currentTarget.title); 
  e.preventDefault()
  if (values.two) {
      const roomNumber = queryString.stringify({rooms:values.two})
      history.push(`/search/roomnumber/${roomNumber}`)
  }
  else {
      history.push('/')
  }
}
const handleChange3 =(e) => {
  const value = e.currentTarget.title
  setValues({...values, value})
  console.log(e.currentTarget.title); 
  e.preventDefault()
  if (values.three) {
      const roomNumber = queryString.stringify({rooms:values.three})
      history.push(`/search/roomnumber/${roomNumber}`)
  }
  else {
      history.push('/')
  }
}
const handleChange4 =(e) => {
  const value = e.currentTarget.title
  setValues({...values, value})
  console.log(e.currentTarget.title); 
  e.preventDefault()
  if (values.four) {
      const roomNumber = queryString.stringify({rooms:values.four})
      history.push(`/search/roomnumber/${roomNumber}`)
  }
  else {
      history.push('/')
  }
}

    return (
        <>
           <div className={classes.paper}>
                        <div className={classes.filterSection}>                   
                             <h2>BEDROOMS</h2>                        
                             <ul className={classes.filterMulti}>               
                                          <li className={classes.neighbourList}  onClick={handleChange} title={values.studio} >               
                                      <span >{values.studio}</span> 
                                    </li> 
                                <li className={classes.neighbourList} title={values.first} onClick={handleChange1}>
                                  <span >{values.first}</span>    
                              </li>     
                              <li className={classes.neighbourList} title={values.two} onClick={handleChange2}>        
                                <span>{values.two}</span>  
                                  </li>        
                                  <li className={classes.neighbourList} title={values.three} onClick={handleChange3}>           
                                    <span>{values.three}</span> </li>  
                              <li className={classes.neighbourList} title={values.four} onClick={handleChange4}>  
                                <span>{values.four}</span> 
                            </li>  </ul> 
                        </div>
                      </div> 
        </>
    )
}
