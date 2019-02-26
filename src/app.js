const instrumentFamilyData = require('./data/instrument_family_data.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const dropdownElement = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(dropdownElement);
  instrumentDropdown.bindEvents();

});
