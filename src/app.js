const instrumentFamilyData = require('./data/instrument_family_data');
const InstrumentSelectView = require('./views/instrument_select_view.js');
const InstrumentFamilies = require('./models/instrument_families');
const ResultView = require('./views/instrument_result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const dropdownElement = document.querySelector('#instrument-families');
  const instrumentDropdown = new InstrumentSelectView(dropdownElement);
  instrumentDropdown.bindEvents();

  const instrumentFamilyDataModel = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilyDataModel.bindEvents();

  const infoSection = document.querySelector('body');
  const instrumentFamilyInfo = new ResultView(infoSection);
  instrumentFamilyInfo.bindEvents();
});
