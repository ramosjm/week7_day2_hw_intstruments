const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelectView = function(dropdownElement){
  this.dropdownElement = dropdownElement;
};

InstrumentSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready',(evt) =>{
    const allInstruments = event.detail;
    console.log('all instruments:');
    console.log(allInstruments);
    this.addOptions(allInstruments);
  });

  this.dropdownElement.addEventListener('change',(evt)=>{
    const dropDownSelectedIndex = evt.target.value;
    console.log(dropDownSelectedIndex);
    PubSub.publish('InstrutmentSelectView:change',dropDownSelectedIndex);
  });
};
  InstrumentSelectView.prototype.addOptions = function(instrumentData){
    instrumentData.forEach((instrument,index)=>{
      const option = document.createElement('option');
      option.textContent = instrument.name;
      option.value = index;
      this.dropdownElement.appendChild(option);
    });
};

module.exports = InstrumentSelectView;
