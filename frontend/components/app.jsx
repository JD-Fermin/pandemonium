import React from 'react';
import {
    Route, Switch
  } from 'react-router-dom';
import LoginFormContainer from "./session/login_form_container";
import RegisterFormContainer from "./session/register_form_container";
import Splash from './splash/splash';
import HomeContainer from './home/home_container'
import DmBox from './direct_messages/dm_box';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
    <div>

        <Switch>
            <ProtectedRoute path="/servers/:serverId/channels/:channelId" component={HomeContainer} />
            <ProtectedRoute path="/servers/:serverId" component={HomeContainer} />
            <ProtectedRoute path="/conversations/:conversationId" component={DmBox}/>
            <ProtectedRoute path="/conversations/" component={DmBox}/>
            <ProtectedRoute path="/discover" component={HomeContainer} />
            <ProtectedRoute path="/home" component={HomeContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/register" component={RegisterFormContainer} />
            <AuthRoute exact path="/" component={Splash} />
        </Switch>
    </div>
)

export default App