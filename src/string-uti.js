/*
 * Remove all spaces on left and right
 * @params value - String to trim
 * @return String without boarders spaces
 */
const trim = value => leftTrim(rightTrim(value));

export {trim};

/*
 * Remove spaces left
 * @params value
 * @return string
 */
const leftTrim = value => replace(value, '^\\s+', '');

export {leftTrim};

/*
 * Remove spaces right
 * @params value
 * @return string
 */
const rightTrim = value => replace(value, '\\s+$', '');

export {rightTrim};