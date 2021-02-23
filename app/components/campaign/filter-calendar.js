import Component from '@glimmer/component';

export default class CampaignFilterCalendarComponent extends Component {
  get results() {
    let { insights, queryCalendar } = this.args;

    if (queryCalendar) {
      console.log('insight: ' + insights + ' queryCalendar: ' + queryCalendar);
      insights = insights.filter((insight) => insight.id.includes(queryCalendar));
    }

    return insights;
  }
}
