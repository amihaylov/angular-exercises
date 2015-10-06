var restful = require('node-restful');

module.exports = function (app, route) {

    var rest = restful.model('day', app.models.day).methods(['get', 'post', 'put', 'delete']);

    rest.register(app, route);

    return function (req, res, next) {
        next();
    };

};