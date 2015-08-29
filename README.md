# keyboard-shortcuts
[![npm](https://img.shields.io/npm/v/keyboard-shortcuts.svg?style=flat-square)](https://www.npmjs.com/package/keyboard-shortcuts)
[![David](https://img.shields.io/david/circuitsim/keyboard-shortcuts.svg?style=flat-square)](https://david-dm.org/circuitsim/keyboard-shortcuts)
[![David](https://img.shields.io/david/dev/circuitsim/keyboard-shortcuts.svg?style=flat-square)](https://david-dm.org/circuitsim/keyboard-shortcuts#info=devDependencies)

Keyboard shortcuts

```javascript
import Keys, { getKeyCombo } from 'keyboard-shortcuts';

const key = Keys.c; // Symbol(c)
Keys[key]; // 'c'

const event = {
  altKey: false
  charCode: 99
  ctrlKey: false
  keyCode: 99
  keyIdentifier: "U+0043"
  metaKey: false
  shiftKey: false
  timeStamp: 1440844681923
  type: "keypress"
  which: 99
};
getKeyCombo(event); // Symbol(c)
```
