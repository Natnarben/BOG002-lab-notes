import React from 'react'
import  { 
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom'
import Logout from './components/Logout'
import LoginApp from './components/LoginApp'
import LandingPage from './vistas/LandingPage'

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/homepage" component={Logout}/>
                <Route path="/login" component={LoginApp}/> 
            </Switch>
        </Router>
    )
}
