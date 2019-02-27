var Backbone = require('backbone');
var template = require('ak-template');
var MentionRealTime = require('./components/mentions-real-time');
var TwitterRealTime = require('./index.tpl');

module.exports = Backbone.View.extend({
  'el': '#app',
  'template': template(TwitterRealTime),
  'render': function render () {
    this.$el.html(this.template());

    var mentionRealTime = new MentionRealTime({
      'collection': this.collection
    });

    mentionRealTime.render();

    return this;
  }
});
