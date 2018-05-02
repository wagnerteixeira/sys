import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Product from '../ui/products/product'
import User from '../ui/products/user'

export default props => (    
    <main>
        <Switch>
            <Route exact path='/' component={Product} />
            <Route path='/user' component={User} />        
            <Redirect from='*' to='/' />
        </Switch>
    </main>
)