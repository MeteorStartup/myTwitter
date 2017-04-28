Template.messages.helpers({
  'messages': function() {
    return twits.find().fetch();
  }
});


Template.jumbotron.events({
  'click #messageSend': function() {
    var email = $('#email').val();
    var message = $('#message').val();

    var tmp = {
      email: email,
      message: message
    };

    twits.insert(tmp);

  }
});