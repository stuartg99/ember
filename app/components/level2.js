import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Level1 extends Component {

  @action
  clickItem(test) {
    debugger;
    // This is the interesting bit, the args are the @passed in parameters..
    // In this case, that includes the '@onSelected' arg which is actually
    // the controller/parent.js onSelect() function.
    this.args.onSelected(test);
  }

}
