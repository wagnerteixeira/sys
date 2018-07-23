import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import User from '../ui/users/user'
import UploadSinapi from '../ui/uploadSinapi/uploadSinapi'

export default props => (    
    <main>
        <Switch>
            <Route exact path='/' component={UploadSinapi} />
            <Route path='/uploadSinapi' component={UploadSinapi} />        
            <Route path='/user' component={User} />    
            <Redirect from='*' to='/' />
        </Switch>
    </main>
)