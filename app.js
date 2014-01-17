//Dependencies
var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    http = require('http');
var app = express();
// Configuration
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.engine('.html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('view options', {
        layout: false
    });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({secret:'omgnodeworks'}));
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});
// Angular Routes
app.get('/', routes.index);

app.get('*', routes.index);
//Create server
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port: " + app.get('port'));
});