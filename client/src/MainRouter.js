import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Core/Home'
import Users from './User/Users'
import EditProfile from './User/EditProfile'
import Profile from './User/Profile'
import PrivateRoute from './Auth/PrivateRoute'
import Menu from './Core/Menu'
import Signup from './Accounts/Signup'
import Login from './Accounts/Login'
import NewProduct from './Containers/Admin/NewProperty'
import RentalProperty from './Containers/Tenants/RentalProperty'
import Property from './Containers/Tenants/Property'
import DetailProperty from './Containers/Property/DetailProperty'
import PropertySaved from './Containers/Tenants/SavedProperty'
import PriceSearch from './Containers/Tenants/PriceSearch'
import RoomSearch  from './Containers/Tenants/RoomSearch'
import EditProperty from './Containers/Property/EditProperty'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  exact path="/search/:keyword" component={Property} />
        <Route exact path="/search/price/:query" component={PriceSearch} />
        <Route exact path="/search/roomnumber/:roomNumber" component={RoomSearch} />
        <Route exact path="/rent" component={RentalProperty} />
        <Route path="/users" component={Users}/>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/saved/:userId' component={PropertySaved}/>
        <Route exact path='/property/:propertyId' component={DetailProperty} />
        <PrivateRoute path='/landlord/upload' component={NewProduct} />
        <PrivateRoute  path='/property/:userId/:propertyId/edit' component={EditProperty}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>)
}

export default MainRouter
