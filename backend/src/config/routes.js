const express = require('express')
const auth = require('./auth')
var expressListRoutes   = require('express-list-routes')

module.exports = function(server){
    /*
     * Rotas protegidas por token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

   // protectedApi.use(auth)

    //const BillingCycle = require('../api/billingCycle/billingCycleService')
    //BillingCycle.register(protectedApi, '/billingCycles')
    const ProductService = require('../api/services/productService')
    ProductService.register(protectedApi, '/product')

    const UserService = require('../api/services/userService')
    UserService.register(protectedApi, '/user')
    /*
     * Rotas Abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/services/authService')
    openApi.post('/login', AuthService.login)
    //openApi.post('/signUp', AuthService.signUp)
    openApi.post('/validateToken', AuthService.validateToken)

    console.log("ROTAS:\n")
    expressListRoutes({ prefix: '/api' }, 'Protected API:', protectedApi)
    expressListRoutes({ prefix: '/oapi' }, 'Open API:', openApi)
}
