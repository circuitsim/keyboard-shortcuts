import Enum from 'symbol-enum';

/**
 * List of keys which can be used as shortcuts.
 */
const Keys = new Enum(
  'c',
  'r',
  'w',
  'ctrl+z',
  'ctrl+y'
);

export default Keys;

/*
 * Take an event and return the corresponding Key from the above list, or undefined if one doesn't exist.
 */
export const getKeyCombo = event => {
  const char = String.fromCharCode(event.keyCode || event.charCode).toLowerCase();
  if (event.ctrlKey) {
    return Keys['ctrl+' + char];
  }
  return Keys[char];
};
