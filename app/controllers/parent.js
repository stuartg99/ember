import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ParentController extends Controller {

  @action
  selectItem(item) {
    alert('Made it.. phew.. you selected this item right? Item:'+ item);
  }

}
