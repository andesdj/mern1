// KEYS.js Figure credentials to Production ENV
if (process.env.node_ENV ==='production'){
    // We are in production ENV - Return the Production set of Keys
   module.exports =  require('./prod')

} else {
    // We are in DEV Env- Return the Developer set of keys
   module.exports =  require('./dev')

}
