// Dependencies
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'SIZuQvY6RDYHJnMR7IOLl0Zqr',
  consumer_secret: '7VQEu03dzjwy9ETpMj7MVuhm9kPQIgty5kPKXab1mN1UaxLAO5',
  access_token_key: '1099960017900441600-UfGekr5jaaCN2NVR0N5ZUW76L6NJ1P',
  access_token_secret: 'LG75Km34yWoWrNhliC2mliO9GKsD8W3sWWACDYwD3utIb'
});

var formatter = function formatter (mention) {
  return {
    'created_at': mention.created_at,
    'id': mention.id,
    'text': mention.text,
    'user': {
      'name': mention.user.name,
      'avatar': mention.user.profile_image_url
    },
    'reply_count': mention.reply_count,
    'retweet_count': mention.retweet_count,
    'favorite_count': mention.favorite_count,
    'coordinates': mention.coordinates
  };
};

var stream = client.stream('statuses/filter', {track: 'paris'});

stream.on('data', function(tweet) {
  if (tweet) {
    var tweetFormatted = formatter(tweet)

  //  io.on('connection', function() {
      io.emit('on.received.tweet', tweetFormatted);
      console.log(tweetFormatted);
    //});
  }
});

stream.on('error', function(error) {
  throw error;
});


http.listen(3000)
