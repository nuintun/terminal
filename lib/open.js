/**
 * Created by nuintun on 2015/11/24.
 */

'use strict';

// if bold is broken, we can't
// use it in the terminal.
function isBoldBroken(){
  var el = document.createElement('span');

  el.innerHTML = 'hello world';

  document.body.appendChild(el);

  var w1 = el.scrollWidth;

  el.style.fontWeight = 'bold';

  var w2 = el.scrollWidth;

  document.body.removeChild(el);

  return w1 !== w2;
}

module.exports = function (Terminal){
  /**
   * open
   */
  Terminal.prototype.open = function (){
    var div;
    var i = 0;

    this.screen = document.createElement('div');
    this.screen.className = 'ui-terminal';
    this.screen.style.outline = 'none';

    this.screen.setAttribute('tabindex', '0');
    this.screen.setAttribute('spellcheck', 'false');

    // sync default bg/fg colors
    this.screen.style.backgroundColor = this.background;
    this.screen.style.color = this.foreground;

    // Create the lines for our terminal.
    this.children = [];

    for (; i < this.rows; i++) {
      div = document.createElement('div');
      div.className = 'ui-terminal-row';

      this.children.push(div);
      this.screen.appendChild(div);
    }

    // XXX - hack, move this somewhere else.
    if (Terminal.brokenBold === null) {
      Terminal.brokenBold = isBoldBroken();
    }

    this.refresh(0, this.rows - 1);
  };
};
