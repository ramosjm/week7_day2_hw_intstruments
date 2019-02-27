const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:instrument-info-ready',(evt)=>{
    const instrumentFamilyInfo = evt.detail;
    this.display(instrumentFamilyInfo);
  });
};

ResultView.prototype.display = function(instrumentFamilyInfo){
  const infoDivContainer = document.createElement('div');
  const infoHeader = document.createElement('h2');
  infoHeader.textContent = instrumentFamilyInfo.name
  infoDivContainer.appendChild(infoHeader);
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrumentFamilyInfo.description;
  infoDivContainer.appendChild(infoParagraph);
  const instrumentHeader = document.createElement('h3');
  instrumentHeader.textContent = 'Instruments Include:'
  infoDivContainer.appendChild(instrumentHeader);
  this.container.innerHTML = '';
  this.container.appendChild(infoDivContainer);
  const instrumentList = this.getInstruments(instrumentFamilyInfo.instruments);
};

ResultView.prototype.getInstruments = function(instruments){
  instruments.forEach((instrument) =>{
    const listElement = document.createElement('li');
    listElement.textContent = instrument;
    this.container.appendChild(listElement);
  });
};

module.exports = ResultView;
