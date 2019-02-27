// Dependencies
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  'default': {
    'created_at': '',
    'id': '',
    'text': '',
    'user': {
      'name': '',
      'avatar': ''
    },
    'replyCount': 0,
    'retweetCount': 0,
    'favoriteCount': 0,
    'coordinates': false
  }
});
