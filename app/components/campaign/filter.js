import Component from '@glimmer/component';

export default class CampaignFilterComponent extends Component {
  get results() {
    let { campaigns, query } = this.args;

    if (query) {
      console.log('camp: ' + campaigns + ' query: ' + query);
      campaigns = campaigns.filter((campaign) => campaign.objective.includes(query));
    }

    return campaigns;
  }
}
