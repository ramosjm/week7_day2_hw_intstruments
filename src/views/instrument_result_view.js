const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:instrument-info-ready',(evt)=>{
    const description = evt.detail;
    console.log(description);
    this.display(description);
  });
};

ResultView.prototype.display = function(description){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = description;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  console.log('result view instrument:');
  console.log(description);
};

module.exports = ResultView;
