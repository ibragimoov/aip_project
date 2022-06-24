var User = require("./../models/User").User


module.exports = function(req,res,next) {
    res.locals.user = null

    User.findById(req.session.user, function (err, user) {
        if (err)
            return next(err)
        res.locals.user = user;
        next();
    })
}
