
function location(maxCustomersPerHr, minCustomersPerHr, avgCookiesPerCustomer, cookiesPerHourArr, dailyTotal, name) {
  this.maxCustomersPerHr = maxCustomersPerHr
  this.minCustomersPerHr = minCustomersPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHourArr = cookiesPerHourArr;
  this.dailyTotal = dailyTotal;
  this.name = name;

  var pikePlace = new location(88, 17, 5.2, [], 0, "Pike Place")
  }

}
  var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
  var pikePlace = {
    minCustomersPerHr: 88,
    maxCustomerPerHr: 17,
    avgCookiesPerCustomer: 5.2,
    cookiesPerHourArr: [],
    dailyTotal: 0,
    name: "Pike Place",



  randCustomerPerHr: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },


  generateHourly: function() {

    for (var i = 0; i < hours.length; i++) {
      var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
      this.cookiesPerHourArr.push(cookiesNeededPerHour);
      this.dailyTotal += cookiesNeededPerHour;
    }},

  render: function() {
    this.generateHourly();
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var section = document.getElementById("data");
    console.log(section);
    section.appendChild(ulEl);
      for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

      ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;
}}
var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var seaTacAirport = {
  minCustomersPerHr: 44,
  maxCustomerPerHr: 6,
  avgCookiesPerCustomer: 1.2,
  cookiesPerHourArr: [],
  dailyTotal: 0,
  name: "SeaTac Airport",



randCustomerPerHr: function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

  for (var i = 0; i < hours.length; i++) {
    var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
    this.cookiesPerHourArr.push(cookiesNeededPerHour);
    this.dailyTotal += cookiesNeededPerHour;
  }},

render: function() {
  this.generateHourly();
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  var section = document.getElementById("data");
  console.log(section);
  section.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

    ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;

}}

var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var southcenterMall = {
  minCustomersPerHr: 38,
  maxCustomerPerHr: 11,
  avgCookiesPerCustomer: 1.9,
  cookiesPerHourArr: [],
  dailyTotal: 0,
  name: "Southenter Mall",



randCustomerPerHr: function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

  for (var i = 0; i < hours.length; i++) {
    var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
    this.cookiesPerHourArr.push(cookiesNeededPerHour);
    this.dailyTotal += cookiesNeededPerHour;
  }},

render: function() {
  this.generateHourly();
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  var section = document.getElementById("data");
  console.log(section);
  section.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

    ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;

}}
var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var bellevueSquare = {
  minCustomersPerHr: 48,
  maxCustomerPerHr: 20,
  avgCookiesPerCustomer: 3.3,
  cookiesPerHourArr: [],
  dailyTotal: 0,
  name: "Bellevue Square",



randCustomerPerHr: function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

  for (var i = 0; i < hours.length; i++) {
    var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
    this.cookiesPerHourArr.push(cookiesNeededPerHour);
    this.dailyTotal += cookiesNeededPerHour;
  }},

render: function() {
  this.generateHourly();
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  var section = document.getElementById("data");
  console.log(section);
  section.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

    ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;

}}

var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var alki = {
  minCustomersPerHr: 24,
  maxCustomerPerHr: 3,
  avgCookiesPerCustomer: 2.6,
  cookiesPerHourArr: [],
  dailyTotal: 0,
  name: "Alki",



randCustomerPerHr: function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

  for (var i = 0; i < hours.length; i++) {
    var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
    this.cookiesPerHourArr.push(cookiesNeededPerHour);
    this.dailyTotal += cookiesNeededPerHour;
  }},

render: function() {
  this.generateHourly();
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  var section = document.getElementById("data");
  console.log(section);
  section.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];
    ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;


}}



pikePlace.render();
seaTacAirport.render();
southcenterMall.render();
bellevueSquare.render();
alki.render();

var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var pikePlace = {
  minCustomersPerHr: 88,
  maxCustomerPerHr: 17,
  avgCookiesPerCustomer: 5.2,
  cookiesPerHourArr: [],
  dailyTotal: 0,
  name: "Pike Place",



randCustomerPerHr: function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

  for (var i = 0; i < hours.length; i++) {
    var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
    this.cookiesPerHourArr.push(cookiesNeededPerHour);
    this.dailyTotal += cookiesNeededPerHour;
  }},

render: function() {
  this.generateHourly();
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  var section = document.getElementById("data");
  console.log(section);
  section.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

    ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;
}}
var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var seaTacAirport = {
minCustomersPerHr: 44,
maxCustomerPerHr: 6,
avgCookiesPerCustomer: 1.2,
cookiesPerHourArr: [],
dailyTotal: 0,
name: "SeaTac Airport",



randCustomerPerHr: function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

for (var i = 0; i < hours.length; i++) {
  var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
  this.cookiesPerHourArr.push(cookiesNeededPerHour);
  this.dailyTotal += cookiesNeededPerHour;
}},

render: function() {
this.generateHourly();
var ulEl = document.createElement('ul');
ulEl.appendChild(document.createTextNode(this.name));
var section = document.getElementById("data");
console.log(section);
section.appendChild(ulEl);
  for (var i = 0; i < hours.length; i++) {
var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

  ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;

}}

var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var southcenterMall = {
minCustomersPerHr: 38,
maxCustomerPerHr: 11,
avgCookiesPerCustomer: 1.9,
cookiesPerHourArr: [],
dailyTotal: 0,
name: "Southenter Mall",



randCustomerPerHr: function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

for (var i = 0; i < hours.length; i++) {
  var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
  this.cookiesPerHourArr.push(cookiesNeededPerHour);
  this.dailyTotal += cookiesNeededPerHour;
}},

render: function() {
this.generateHourly();
var ulEl = document.createElement('ul');
ulEl.appendChild(document.createTextNode(this.name));
var section = document.getElementById("data");
console.log(section);
section.appendChild(ulEl);
  for (var i = 0; i < hours.length; i++) {
var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

  ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;

}}
var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var bellevueSquare = {
minCustomersPerHr: 48,
maxCustomerPerHr: 20,
avgCookiesPerCustomer: 3.3,
cookiesPerHourArr: [],
dailyTotal: 0,
name: "Bellevue Square",



randCustomerPerHr: function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

for (var i = 0; i < hours.length; i++) {
  var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
  this.cookiesPerHourArr.push(cookiesNeededPerHour);
  this.dailyTotal += cookiesNeededPerHour;
}},

render: function() {
this.generateHourly();
var ulEl = document.createElement('ul');
ulEl.appendChild(document.createTextNode(this.name));
var section = document.getElementById("data");
console.log(section);
section.appendChild(ulEl);
  for (var i = 0; i < hours.length; i++) {
var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];

  ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;

}}

var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
var alki = {
minCustomersPerHr: 24,
maxCustomerPerHr: 3,
avgCookiesPerCustomer: 2.6,
cookiesPerHourArr: [],
dailyTotal: 0,
name: "Alki",



randCustomerPerHr: function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
},


generateHourly: function() {

for (var i = 0; i < hours.length; i++) {
  var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomerPerHr));
  this.cookiesPerHourArr.push(cookiesNeededPerHour);
  this.dailyTotal += cookiesNeededPerHour;
}},

render: function() {
this.generateHourly();
var ulEl = document.createElement('ul');
ulEl.appendChild(document.createTextNode(this.name));
var section = document.getElementById("data");
console.log(section);
section.appendChild(ulEl);
  for (var i = 0; i < hours.length; i++) {
var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + this.cookiesPerHourArr[i];
  ulEl.appendChild(liEl);
}
liEl.textContent = "Total: " + this.dailyTotal;


}}



pikePlace.render();
seaTacAirport.render();
southcenterMall.render();
bellevueSquare.render();
alki.render();
