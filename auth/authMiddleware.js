const auth = require('./util');

function logger( req, res, next ) {
    console.log( new Date(), req.method, req.url );
    next();
}

function authenticate(req, res, next) {
    const {email, password} = req.body
    const authed = auth.isAunthenticUser(email, password)

    if (!authed) {
        next (new Error('Not authorized!'))
    }
    next();
}

function authorize(req, res, next) {
    const authHeader = req.get('Authorization')
    const [, token] = authHeader.split(' ')
    console.log(token)
    // if User is not same as Current User
    if(!token || token !== '007') {
        next(new Error('You are not authorized!!!'))
    }
    next();
}

module.exports = {
    logger,
    authenticate,
    authorize
}