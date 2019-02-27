var template = require('ak-template');
var Backbone = require('backbone');

var TwitterRealTime = require('./index.tpl');

module.exports = Backbone.View.extend({
  'el': '#app',
  'template': template(TwitterRealTime),
  'initialize': function init () {
    this.listenTo(this.collection, 'add', this.render);
  },
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));

    return this;
  }
});
