// Dependencies
var Backbone = require('backbone');
var io = require('socket.io-client');

// Models
var Mention = require('../models/mentions.js');

var formatter = function formatter (mention) {
  return {
    'created_at': mention.created_at,
    'id': mention.id,
    'text': mention.text,
    'user': {
      'name': mention.user.name,
      'avatar': mention.user.avatar
    },
    'reply_count': mention.reply_count,
    'retweet_count': mention.retweet_count,
    'favorite_count': mention.favorite_count,
    'coordinates': mention.coordinates
  };
};

var Mentions = Backbone.Collection.extend({
  'model': Mention,
  'initialize': function initialize () {
    const socket = io('http://localhost:3000');

    socket.on('on.received.tweet', function event (tweet) {
      console.log(tweet.created_at);
      var tweetFormated = formatter(tweet);

      this.addMention(tweetFormated);
    }.bind(this));
  },
  'addMention': function addMention (mention) {
    this.unshift(formatter(mention));
  }
});

module.exports = new Mentions();
