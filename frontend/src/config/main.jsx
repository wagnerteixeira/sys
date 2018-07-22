import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import User from '../ui/users/user'
import UploadSinapi from '../ui/uploadSinapi/uploadSinapi'
import FileSelector from '../ui/uploadSinapi/fileSelector'
import AlertDialogTest from '../common/alertDialogText'

export default props => (    
    <main>
        <Switch>
            <Route exact path='/' component={UploadSinapi} />
            <Route path='/uploadSinapi' component={AlertDialogTest} />        
            <Route path='/user' component={User} />   
            <Route path='/fileselector' component={FileSelector} />   
            <Redirect from='*' to='/' />
        </Switch>
    </main>
)