twits = new Mongo.Collection('twits');

twits.allow({
  'insert': function() {
    return true;
  },
  'remove': function() {
    //권한을 체크한다.
    //if user is admin then return true
    //else return false
    return true;
  }
});