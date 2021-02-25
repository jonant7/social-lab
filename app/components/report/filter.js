import Component from '@glimmer/component';

export default class ReportFilterComponent extends Component {
  get results() {
    let { insights, query } = this.args;

    if (query) {
      console.log('ins: ' + insights + ' query: ' + query);
      insights = insights.filter((insight) => insight.ctr >= (query));
    }

    return insights;
  }
}

//7.181399
