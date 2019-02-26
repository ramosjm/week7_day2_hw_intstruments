const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-instruments-ready',this.data);

  PubSub.subscribe('InstrutmentSelectView:change',(evt)=>{
    const dropDownSelectedIndex = evt.detail;
    this.publishSingleInstrument(dropDownSelectedIndex);
  });
};

InstrumentFamilies.prototype.publishSingleInstrument = function(dropDownSelectedIndex){
  const selectedInstrumentInfo = this.data[dropDownSelectedIndex];
  PubSub.publish('InstrumentFamilies:instrument-info-ready',selectedInstrumentInfo)
};

module.exports = InstrumentFamilies;
