
Template.jumbotron.helpers({
  'isLoggedIn': function() {
    // 현재 상태가 로그인 상태이면 true 리턴
    // 로그아웃 상태이면 false 리턴
    var user = Meteor.user();
    if(user == undefined) {
      return false;
    }
    else return true;
  }
});



Template.jumbotron.events({
  'click #messageSend': function(evt) {
    evt.preventDefault();
    // var email = $('#email').val();
    var message = $('#message').val();
    if (!(message.length > 0)) {
      return;
    }

    try {

      var file = $('#twitImage')[0].files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        var image = event.target.result;
        var tmp = {
          createdAt: new Date(),
          // email: email,
          message: message,
          image: image
        };

        twits.insert(tmp, function (err) {
          if (err) {
            return;
          }
          $('#message').val('');
          $('#twitImage').val('');
        });
      };
      reader.readAsDataURL(file);
    }
    catch(err) {
      var tmp = {
        createdAt: new Date(),
        // email: email,
        message: message,
      };

      twits.insert(tmp, function (err) {
        if (err) {
          return;
        }
        $('#message').val('');
        $('#twitImage').val('');
      });
    }



  }
});