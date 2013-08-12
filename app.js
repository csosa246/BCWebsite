
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    http = require('http');

var app = express();

// Configuration
app.configure(function() {
	app.set('port',process.env.PORT || 3000);
  	app.set('views', __dirname + '/views');
  	app.engine('.html', require('ejs').renderFile);
  	app.set('view engine', 'html');
  	app.set('view options', {
    	layout: false
  	});
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
  	app.use(express.session({ secret: 'omgnodeworks' }));
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

//WORK API
app.get('/api/work', api.work);
app.get('/api/workgallery/:id', api.workGallery);
//MUSIC API
app.get('/api/music', api.music);



// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'),function(){
    console.log("Express server listening on port: " + app.get('port'));
})
