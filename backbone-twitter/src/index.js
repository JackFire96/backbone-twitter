require('./assets/css/reset.scss');
require('./index.scss');

// Dependencies
var Backbone = require('backbone');

// Collections
var mentionsCollection = require('./collections/mentions.js');

// Controllers
var TwitterRealTimeController = require('./controllers/twitter-realtime');

// Router
var Router = Backbone.Router.extend({
  'routes': {
    '*actions': 'twitterRealTimeController'
  }
});

var router = new Router();

router.on('route:twitterRealTimeController', function defautRoute () {
  var twitterRealTimeController = new TwitterRealTimeController({
    'collection': mentionsCollection
  });

  twitterRealTimeController.render();
});

Backbone.history.start({
  'pushState': true
});
