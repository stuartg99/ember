import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Level1 extends Component {

  // Interestingly, this component is still needed,
  // even though it is blank!
  // Or we get this message:
  // Uncaught TypeError: this.args.onSelected is not a function
  //     at Level1.clickItem (level2.js:34)
  //     at Proxy.<anonymous> (index.js:7578)
  // clickItem @ level2.js:34
  // (anonymous) @ index.js:7578
  
}
