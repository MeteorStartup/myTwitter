Template.messages.helpers({
  'messages': function() {
    return twits.find({}, {sort: {createdAt: -1}}).fetch();
  }
});