var Link = require('../models/link').Link;
exports.post = function(req, res, next) {
    var canvas = req.body.data;
};

exports.get = function(req, res, next) {
    Link.checkLink(res.locals.user.username, function(p_link){
        if (p_link == "No Link"){
            res.status(404).send("Fuck off!")
        }
        else{
            res.send(p_link);
        }
    });
};