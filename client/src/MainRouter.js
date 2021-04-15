import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import Signup from './accounts/Signup'
import Login from './accounts/Login'
import NewProduct from './property/NewProperty'
import RentalProperty from './property/RentalProperty'


const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rent" component={RentalProperty} />
        <Route path="/users" component={Users}/>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute path='/landlord/upload' component={NewProduct} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>)
}

export default MainRouter
