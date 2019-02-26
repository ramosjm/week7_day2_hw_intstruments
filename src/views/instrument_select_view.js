const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelectView = function(dropdownElement){
  this.dropdownElement = dropdownElement;
};

InstrumentSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready',(evt) =>{
    const allInstruments = event.detail;
  });
};

module.exports = InstrumentSelectView;
