import Route from '@ember/routing/route';
import $ from 'jquery';

export default class UserRoute extends Route {
  model(){
    var me = 3670953112943120;
    var token = 'EAAFgxRDxkZAoBALJ8kplz5QBzlInZAguC2uaSwIOJ5StmjibAd2oVEDmGOWTmBsc1UZATPTChsVtH1SlakDyieCOZAyHo9ssuN98PBr8BhRNDIlHZARZArPob1sKbhXhFZBsGHgurYsrG9mSrYLDsIWNz3ZBTnuNT6WdoIh0oNLGWvCpURVw5DDIx3yI3mijO2O6JHZC54KXBIIdL5z56ocpwymWivft9hkfXR25uHg1NrXLPXUk6mnsSrDkA3VCcqDMZD';
    var host = 'https://graph.facebook.com/v9.0/';
    var resp = [];

    $.ajax({
      type: "GET",
      dataType: "json",
      url: host + me + "?fields=email,id,name,businesses,picture&access_token=" + token,
    async: false,
    success : function(data) {
      console.log(data);
      resp.push(data.id, data.name, data.email, data.businesses.data[0].name, data.picture.data.url);
    }, error : function(req, err) {
        console.log(err);
    }
  })
  console.log(resp);
  var respString = JSON.stringify({_id:resp[0], name:resp[1], email:resp[2], business:resp[3], picture:resp[4]});
  console.log(respString);

  let user = this.store.peekAll('user', '_id');
  console.log(user);

  $.ajax({
    type: "POST",
    url: "https://social-lab-c5b89-default-rtdb.firebaseio.com/users.json",
    crossDomain: true,
    dataType: "json",
    data: respString, // Data sent to server, a set of key/value pairs (i.e. form       fields and values)
    success: function () {
      console.log('Llenado');
    },
    error: function () {
      console.log('Error post route usuario');
    }
  });

  return this.store.findAll('user');
  }
}


