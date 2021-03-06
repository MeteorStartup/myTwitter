
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
    if ($('#twitImage').val().length > 0) {
      try {

        var file = $('#twitImage')[0].files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
          var image = event.target.result;
          var tmp = {
            createdAt: new Date(),
            // email: email,
            message: message,
            image: image,
            user: Meteor.user()
          };

          dd = twits.insert(tmp, function (err) {
            if (err) {
              console.log(err);
              return;
            }
            $('#message').val('');
            $('#twitImage').val('');
          });
          console.log(dd)
        };
        reader.readAsDataURL(file);
      }
      catch(err) {
        if(err) {
          console.log(err);
        }
      }
    }
    else {
      var tmp = {
        createdAt: new Date(),
        // email: email,
        message: message,
        user: Meteor.user()
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