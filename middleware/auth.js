

module.exports = {
    /**
    * Adding middleware functions to ensure that
    * a user is authenticated before accessing the dashboard
    * (protects the dashboard route)
    * @param {*} req
    * @param {*} res 
    * @param {*} next 
    */
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/')
        }
    },
    /**
     * Checks if a user is already authenticated, if so
     * it won't ask for the login again
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard')
        } else {
            return next()
        }
    }
}