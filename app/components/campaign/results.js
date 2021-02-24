import Component from '@glimmer/component';


export default class CampaignResultsComponent extends Component {

  get results() {
    let { results, queryResult } = this.args;

    if (queryResult) {
      console.log('camp: ' + results + ' query: ' + queryResult);
      results = results.filter((campaign) => campaign._id.includes(queryResult));
    }
    return results;
  }
}
