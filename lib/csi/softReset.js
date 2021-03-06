/**
 * Created by nuintun on 2015/11/24.
 */

'use strict';

module.exports = function (Terminal){
  // CSI ! p Soft terminal reset (DECSTR).
  // http://vt100.net/docs/vt220-rm/table4-10.html
  Terminal.prototype.softReset = function (){
    this.insertMode = false;
    this.originMode = false;
    // autowrap
    this.wraparoundMode = false;
    this.applicationKeypad = false;
    this.scrollTop = 0;
    this.scrollBottom = this.rows - 1;
    this.curAttr = this.defAttr;
    this.x = this.y = 0;
    this.charset = null;
    this.glevel = 0;
    this.charsets = [null];
  };
};
