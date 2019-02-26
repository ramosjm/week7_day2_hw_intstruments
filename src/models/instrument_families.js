const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  console.log('hiya');
  PubSub.publish('InstrumentFamilies:all-instruments-ready',this.data);

  PubSub.subscribe('InstrutmentSelectView:change',(evt)=>{
    const dropDownSelectedIndex = evt.detail;
    this.publishSingleInstrument(dropDownSelectedIndex);
    console.log('hello - subscribed to inst select view');
  });
};

InstrumentFamilies.prototype.publishSingleInstrument = function(dropDownSelectedIndex){
  const selectedInstrument = this.data[dropDownSelectedIndex].description;
  console.log(selectedInstrument);
  PubSub.publish('InstrumentFamilies:instrument-info-ready',selectedInstrument)
};

module.exports = InstrumentFamilies;
