Template.messages2.events({
  'click #removeTwit': function(event) {
    // Meteor.call('removeTwit', this._id, function(err, rslt) {
    //   if (rslt) {
    //     alert('삭제에 성공하였습니다.')
    //   }
    //   else {
    //     alert('삭제에 실패하였습니다.')
    //   }
    // });
    twits.remove({_id: this._id}, function() {

    });
  },
  'click #testButton': function(event) {
    Meteor.call('request', 10, 'myName', function(err, rslt){
      alert(rslt);
    });
  }
});

Template.messages2.helpers({
  'messages': function() {
    return twits.find({}, {sort: {createdAt: -1}}).fetch();
  }
});