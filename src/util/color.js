import { clip } from 'util/number';

/**
 * Parse an RGB hex string into individual red, green, and blue components.
 *
 * @param {string} hex Color hex string, e.g. '#aabbcc'
 * @returns {Array} Array of [red, green, blue] integers in the range [0, 255].
 */
export const hexToRGB = (hex) => {
  const red = hex.substring(1, 3);
  const green = hex.substring(3, 5);
  const blue = hex.substring(5, 7);

  return [red, green, blue].map((component) => parseInt(component, 16));
};

/**
 * Construct an RGB hex string from individual red, green, blue integer values.
 *
 * @param {Array} Array of [red, green, blue] component values, each in range [0 255].
 * @returns {string} RGB hex string for the specified input.
 */
export const rgbToHex = ([red, green, blue]) =>
  `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

/**
 * Calculate the color created by applying an intensity ratio to an existing color.
 *
 * @param {string} hex Hex string representing the original color.
 * @param {number} ratio Intensity ratio to apply to the original color.
 * @return {string} Hex string of the resulting modified color.
 */
export const colorRatio = (hex, ratio) => {
  const clipRGB = clip(0, 255);
  const ratioComponents = hexToRGB(hex).map((component) => clipRGB(Math.round(component * ratio)));
  return rgbToHex(ratioComponents);
};