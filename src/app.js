const instrumentFamilyData = require('./data/instrument_family_data');
const InstrumentSelectView = require('./views/instrument_select_view.js');
const InstrumentFamilies = require('./models/instrument_families');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const dropdownElement = document.querySelector('#instrument-families');
  const instrumentDropdown = new InstrumentSelectView(dropdownElement);
  instrumentDropdown.bindEvents();

  const instrumentFamilyDataModel = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilyDataModel.bindEvents();

});
