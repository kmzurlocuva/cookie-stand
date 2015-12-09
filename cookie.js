function Location(maxCustomersPerHr, minCustomersPerHr, avgCookiesPerCustomer, name) {
  this.maxCustomersPerHr = maxCustomersPerHr
  this.minCustomersPerHr = minCustomersPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHourArr = [];
  this.dailyTotal = 0;
  this.name = name;
  shops.push(this);
}
  var hours = ['Total','10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
  var shops = [];
  var pikePlace = new Location(88, 17, 5.2, "Pike Place");
  var seaTacAirport = new Location(44, 6, 1.2, "SeaTac Airport");
  var southcenterMall = new Location(38, 11, 1.9, "Southccenter Mall");
  var bellevueSquare = new Location(48, 20, 3.3, "Bellevue Square");
  var alki = new Location(24, 3, 2.6, "Alki");




var userForm = document.getElementById("user-form");

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  var userLocation = event.target.userLocation.value;
  var userMax = event.target.maxCustomersPerHr.value;
  var userMin = event.target.minCustomersPerHr.value;
  var userAvg = event.target.avgCookiesPerCustomer.value;



var mystery = new Location(userMax, userMin, userAvg, userLocation);
mystery.render();

}
userForm.addEventListener('submit', handleFormSubmit);

  Location.prototype.randCustomerPerHr =  function(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
  },


  Location.prototype.generateHourly = function() {

    for (var i = 1; i < hours.length; i++) {
      var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomersPerHr));
      this.cookiesPerHourArr.push(cookiesNeededPerHour);
      this.dailyTotal += cookiesNeededPerHour;

    }
},


  Location.prototype.render = function() {
    this.generateHourly();
    var trEl = document.createElement('tr');
    trEl.appendChild(document.createTextNode(this.name));

    var section = document.getElementById("data");
    section.appendChild(trEl);
    var tdEl = document.createElement('td');
    // console.log(this.cookiesNeededPerHour);
    tdEl.textContent = this.dailyTotal;
    trEl.appendChild(tdEl);

      for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        // console.log(this.cookiesNeededPerHour);
        tdEl.textContent = this.cookiesPerHourArr[i];
        trEl.appendChild(tdEl);
    };
}
function header(){
  // console.log("make a header here:");
  var header = document.getElementById('data');
  var trEl = document.createElement('table');
  var thEl = document.createElement('th');
  thEl.textContent = "Location";

  trEl.appendChild(thEl);
  header.appendChild(trEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document. createElement('th')
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    header.appendChild(trEl);
  }

}
header();



pikePlace.render();
seaTacAirport.render();
southcenterMall.render();
bellevueSquare.render();
alki.render();
