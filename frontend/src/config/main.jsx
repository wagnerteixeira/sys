import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import User from '../ui/users/user'
import UploadSinapi from '../ui/uploadSinapi/uploadSinapi'
import FileSelector from '../ui/uploadSinapi/fileSelector'

export default props => (    
    <main>
        <Switch>
            <Route exact path='/' component={User} />
            <Route path='/uploadSinapi' component={UploadSinapi} />        
            <Route path='/user' component={FileSelector} />   
            <Redirect from='*' to='/' />
        </Switch>
    </main>
)