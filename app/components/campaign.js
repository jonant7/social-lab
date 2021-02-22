import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CampaignComponent extends Component {
  @tracked query = '';
  @tracked queryCalendar = '';

}
