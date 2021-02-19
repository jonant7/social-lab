import Route from '@ember/routing/route';


export default class BrandRoute extends Route {
    model(){
      var idBussines = 141830073349263;
      var token = 'EAAFgxRDxkZAoBALJ8kplz5QBzlInZAguC2uaSwIOJ5StmjibAd2oVEDmGOWTmBsc1UZATPTChsVtH1SlakDyieCOZAyHo9ssuN98PBr8BhRNDIlHZARZArPob1sKbhXhFZBsGHgurYsrG9mSrYLDsIWNz3ZBTnuNT6WdoIh0oNLGWvCpURVw5DDIx3yI3mijO2O6JHZC54KXBIIdL5z56ocpwymWivft9hkfXR25uHg1NrXLPXUk6mnsSrDkA3VCcqDMZD';
      var host = 'https://graph.facebook.com/v9.0/';
      var resp = [];

      $.ajax({
        type: "GET",
        dataType: "json",
        url: host + idBussines + "?fields=owned_pages&access_token="+token,
      async: false,
      success : function(data) {
        console.log(data);
        resp.push(data.owned_pages.id);
      }, error : function(req, err) {
          console.log(err);
      }
    })

    console.log(resp);

        return this.store.findAll('brand');
    }
}
