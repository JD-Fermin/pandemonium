import React from 'react';
import {
    Route, Switch
  } from 'react-router-dom';
import LoginFormContainer from "./session/login_form_container";
import RegisterFormContainer from "./session/register_form_container";
import Splash from './splash/splash';
import HomeContainer from './home/home_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
    <div>

        <Switch>
            <ProtectedRoute path="/channels/:channelId" component={HomeContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/register" component={RegisterFormContainer} />
            <ProtectedRoute path="/home" component={HomeContainer} />
            <AuthRoute exact path="/" component={Splash} />
        </Switch>
    </div>
)

export default App