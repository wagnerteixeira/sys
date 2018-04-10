const express = require('express')
const auth = require('./auth')
//var expressListRoutes   = require('express-list-routes')

module.exports = function(server){
    /*
     * Rotas protegidas por token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

   // protectedApi.use(auth)

    //const BillingCycle = require('../api/billingCycle/billingCycleService')
    //BillingCycle.register(protectedApi, '/billingCycles')
    const Product = require('../api/product/productService')
    Product.register(protectedApi, '/product')
    /*
     * Rotas Abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signUp', AuthService.signUp)
    openApi.post('/validateToken', AuthService.validateToken)

   // console.log("ROTAS:\n")
   // expressListRoutes({ prefix: '/api' }, 'Protected API:', protectedApi)
   // expressListRoutes({ prefix: '/oapi' }, 'Open API:', openApi)
}
