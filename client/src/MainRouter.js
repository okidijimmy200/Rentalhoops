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
import Property from './property/Property'
import DetailProperty from './property/DetailProperty'
import PropertySaved from './property/SavedProperty'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  exact path="/search/:keyword" component={Property} />
        <Route exact path="/rent" component={RentalProperty} />
        <Route path="/users" component={Users}/>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/saved/:userId' component={PropertySaved}/>
        <Route exact path='/property/:propertyId' component={DetailProperty} />
        <PrivateRoute path='/landlord/upload' component={NewProduct} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>)
}

export default MainRouter
