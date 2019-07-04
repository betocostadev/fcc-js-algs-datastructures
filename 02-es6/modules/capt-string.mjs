/* Exports file for use with 06-import-export.mjs */

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString } //How to export functions.