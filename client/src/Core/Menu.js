// import React from 'react'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import auth from './../auth/auth-helper'
// import {Link, withRouter} from 'react-router-dom'
// import RentalLogo from '../assets/images/rentalhoop.svg'
// import MenuItem from '@material-ui/core/MenuItem';
// import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   root: {
//     "&:hover": {
//       backgroundColor: "transparent !important"
//     }
//   },
//   capitalizeText: {
//     textTransform: 'none',
//     border: '1px solid #404040',
//     borderRadius: '8px',
//     borderWidth: '1px',
//     borderStyle: 'solid',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     transition: {
//        top:' 0.1s',
//       ease: '0s', 
//       boxShadow: '0.1s ease 0s', 
//       borderColor: '0.1s ease 0s', 
//       backgroundColor:' 0.1s ease 0s', 
//       color: '0.1s ease 0s'},
//     whiteSpace: 'nowrap',
//     fontSize: '16px',
//     lineHeight: '1.5',
//     backgroundColor: 'rgb(255, 255, 255)',
//     borderColor: 'rgb(205, 209, 212)'
//   }, 
//   about: {
//     textTransform: 'none'
//   }
// })

// const isActive = (history, path) => {
//   // eslint-disable-next-line
//   if (history.location.pathname == path && history.location.pathname != '/signup')
//     return {color: '#ff4081'}
//   else
//     return {color: '#000'}
// }

// const isPartActive = (history, path) => {
//   if (history.location.pathname.includes(path))
//     return {color: '#fffde7', backgroundColor: '#BA265D', marginRight:10}
//   else
//     return {color: '#616161', backgroundColor: '#fffde7', border:'1px solid #BA265D', marginRight:10}
// }

// const Menu = ({history}) => {
//   const classes = useStyles()
//   return (
//     <AppBar position='fixed' style={{
//       background: '#fff',
//       borderBottom: '1px solid #eee',
//       boxShadow: '0px 0px 0px 0px',
//       height: '4rem',
//       color: '#000'
//     }}>
//       <Toolbar>
   
//       <MenuItem component={Link} to="/" className={classes.root} disableRipple>
//           <img src={RentalLogo} alt="logo" style={{
//           width: '2.5rem',
//           height: '2.5rem',
//           fill: '#BA265D',
//       }} />
//         <Typography variant="h6" color="inherit">
//           RentalHoops
//         </Typography>
//       </MenuItem>
//       <Link to="/rent" style={{textDecoration: 'none'}}>
//               <Button style={isActive(history, "/rent")} className={classes.about}>Rent
//               </Button>
//             </Link>
//       <Link to="/about" style={{textDecoration: 'none'}}>
//               <Button style={isActive(history, "/about")} className={classes.about}>How it Works
//               </Button>
//             </Link>
      
//       <div style={{'position': 'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
//         {
//           !auth.isAuthenticated() && (<span>
//             <Link to="/login" style={{textDecoration: 'none'}}>
//               <Button style={isActive(history, "/signup")} className={classes.capitalizeText} p={2}>Log in or Sign Up  </Button>
//             </Link>
//           </span>)
//         }
//         {
//         auth.isAuthenticated() && (<span>
//           {auth.isAuthenticated().user.landlord && 
//           (<Link to="/landlord/upload" style={{textDecoration: 'none'}}>
//               <Button style={isPartActive(history, "/landlord/upload")}>
//                  Upload House
//               </Button></Link>)
//               }
//           <Link to={"/user/" + auth.isAuthenticated().user._id} style={{textDecoration: 'none'}}>
//             <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
//           </Link>
//           <Button color="inherit" onClick={() => {
//               auth.clearJWT(() => history.push('/'))
//             }}>Sign out</Button>
//         </span>)
//         }
//         </span></div>
//       </Toolbar>
//     </AppBar>
//   )
  
// }
// export default withRouter(Menu)


import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import RentalLogo from '../assets/images/rentalhoop.svg'
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent !important"
    }
  },
  capitalizeText: {
    textTransform: 'none',
    border: '1px solid #404040',
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    textAlign: 'center',
    fontWeight: 'bold',
    transition: {
       top:' 0.1s',
      ease: '0s', 
      boxShadow: '0.1s ease 0s', 
      borderColor: '0.1s ease 0s', 
      backgroundColor:' 0.1s ease 0s', 
      color: '0.1s ease 0s'},
    whiteSpace: 'nowrap',
    fontSize: '16px',
    lineHeight: '1.5',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(205, 209, 212)'
  }, 
  about: {
    textTransform: 'none'
  }
})

const isActive = (history, path) => {
  // eslint-disable-next-line
  if (history.location.pathname == path && history.location.pathname != '/signup')
    return {color: '#ff4081'}
  else
    return {color: '#000'}
}

const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#fffde7', backgroundColor: '#BA265D', marginRight:10}
  else
    return {color: '#616161', backgroundColor: '#fffde7', border:'1px solid #BA265D', marginRight:10}
}

const Menu = ({history}) => {
  const classes = useStyles()
  return (
    <AppBar position='fixed' style={{
      background: '#fff',
      borderBottom: '1px solid #eee',
      boxShadow: '0px 0px 0px 0px',
      height: '4rem',
      color: '#000'
    }}>
      <Toolbar>
   
      <MenuItem component={Link} to="/" className={classes.root} disableRipple>
          <img src={RentalLogo} alt="logo" style={{
          width: '2.5rem',
          height: '2.5rem',
          fill: '#BA265D',
      }} />
        <Typography variant="h6" color="inherit">
          RentalHoops
        </Typography>
      </MenuItem>
      <Link to="/rent" style={{textDecoration: 'none'}}>
              <Button style={isActive(history, "/rent")} className={classes.about}>Rent
              </Button>
            </Link>
      <Link to="/about" style={{textDecoration: 'none'}}>
              <Button style={isActive(history, "/about")} className={classes.about}>How it Works
              </Button>
            </Link>
      
      <div style={{'position': 'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
        {
          !auth.isAuthenticated() && (<span>
            <Link to="/login" style={{textDecoration: 'none'}}>
              <Button style={isActive(history, "/signup")} className={classes.capitalizeText} p={2}>Log in or Sign Up  </Button>
            </Link>
          </span>)
        }
        {
        auth.isAuthenticated() && (<span>
          {auth.isAuthenticated().user.landlord && 
          (<Link to="/landlord/upload" style={{textDecoration: 'none'}}>
              <Button style={isPartActive(history, "/landlord/upload")}>
                 Upload House
              </Button></Link>)
              }
          <Link to={"/user/" + auth.isAuthenticated().user._id} style={{textDecoration: 'none'}}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
        }
        </span></div>
      </Toolbar>
    </AppBar>
  )
  
}
export default withRouter(Menu)

