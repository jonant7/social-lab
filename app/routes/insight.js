import Route from '@ember/routing/route';

export default class InsightRoute extends Route {
  model(){
    var act = 'act_717203092419903';
    var token = 'EAAFgxRDxkZAoBALJ8kplz5QBzlInZAguC2uaSwIOJ5StmjibAd2oVEDmGOWTmBsc1UZATPTChsVtH1SlakDyieCOZAyHo9ssuN98PBr8BhRNDIlHZARZArPob1sKbhXhFZBsGHgurYsrG9mSrYLDsIWNz3ZBTnuNT6WdoIh0oNLGWvCpURVw5DDIx3yI3mijO2O6JHZC54KXBIIdL5z56ocpwymWivft9hkfXR25uHg1NrXLPXUk6mnsSrDkA3VCcqDMZD';
    var host = 'https://graph.facebook.com/v9.0/';
    var resp = [];

    $.ajax({
      type: "GET",
      dataType: "json",
      url: host + act + "/insights?date_preset=lifetime&fields=spend,cpc,ctr,impressions,reach,actions,inline_post_engagement&transport=cors&access_token=" + token,
    async: false,
    success : function(data) {
      console.log(data);
      for (let i = 0; i < data.campaigns.data.length; i++) {
        resp.push({_id:data.campaigns.data[i].id, name:data.campaigns.data[i].name, objective:data.campaigns.data[i].objective},);
      }

    }, error : function(req, err) {
        console.log(err);
    }
  })
  console.log(resp);

  var respString = JSON.stringify(resp);
  console.log(respString);

  $.ajax({
    type: "POST",
    url: "https://social-lab-c5b89-default-rtdb.firebaseio.com/insights.json",
    dataType: "json",
    data: respString, 
    success: function () {
      console.log('Llenado');
    },
    error: function () {
      console.log('Error post route usuario');
    }
  });

  return this.store.findAll('insight');
  }
}
