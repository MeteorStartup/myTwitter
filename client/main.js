
Template.body.onCreated(function() {
  Meteor.subscribe('twitList', 10, 'myData');
});