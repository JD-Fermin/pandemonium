import React from 'react';
import {
    Route, Switch
  } from 'react-router-dom';
import LoginFormContainer from "./session/login_form_container";
import RegisterFormContainer from "./session/register_form_container";
import Splash from './splash/splash';
import HomeContainer from './home/home_container'
const App = () => (
    <div>
        <h1>Pandemonium</h1>

        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/register" component={RegisterFormContainer} />
            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
)

export default App