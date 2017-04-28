Meteor.publish({
  'twitList': function(num, str) {
    console.log(num);
    console.log(str);
    return twits.find({}, {limit: 10});
  }
});

Meteor.methods({
  'request': function(num, str) {
    // business logic
    return num + str + ': OK!';
  },
  'removeTwit': function(twitId) {
    //권한체크
    twits.remove({_id: twitId});
    return true;
  }
});