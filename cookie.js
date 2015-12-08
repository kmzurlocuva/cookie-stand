function Location(maxCustomersPerHr, minCustomersPerHr, avgCookiesPerCustomer, cookiesPerHourArr, dailyTotal, name) {
  this.maxCustomersPerHr = maxCustomersPerHr
  this.minCustomersPerHr = minCustomersPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHourArr = cookiesPerHourArr;
  this.dailyTotal = dailyTotal;
  this.name = name;
  shops.push(this);
}
  var hours = ['10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm'];
  var shops = [];
  var pikePlace = new Location(88, 17, 5.2, [], 0, "Pike Place");
  var seaTacAirport = new Location(44, 6, 1.2, [], 0, "SeaTac Airport");
  var southcenterMall = new Location(38, 11, 1.9, [], 0, "Southccenter Mall");
  var bellevueSquare = new Location(48, 20, 3.3, [], 0, "Bellevue Square");
  var alki = new Location(24, 3, 2.6, [], 0, "Alki");



  Location.prototype.randCustomerPerHr =  function(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
  },


  Location.prototype.generateHourly = function() {

    for (var i = 0; i < hours.length; i++) {
      var cookiesNeededPerHour = Math.floor(this.avgCookiesPerCustomer * this.randCustomerPerHr(this.minCustomersPerHr,this.maxCustomersPerHr));
      this.cookiesPerHourArr.push(cookiesNeededPerHour);
      this.dailyTotal += cookiesNeededPerHour;
      // console.log(cookiesNeededPerHour)
    }
},


  Location.prototype.render = function() {
    this.generateHourly();
    var trEl = document.createElement('tr');


    trEl.appendChild(document.createTextNode(this.name + " " + this.dailyTotal));

    var section = document.getElementById("data");
    // var header = document.getElementById("th");
    // console.log(section);
    section.appendChild(trEl);
      for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        // console.log(this.cookiesNeededPerHour);
        tdEl.textContent = this.cookiesPerHourArr[i];
        trEl.appendChild(tdEl);
    };


}
function header(){
  console.log("make a header here:");
  // var header = document.getElementById('header');
  var header = document.getElementById('data');
  var trEl = document.createElement('table');
  var thEl = document.createElement('th');
  thEl.textContent = "Location";
  // thEl.appendChild(document.createTextNode(thEl));
  trEl.appendChild(thEl);
  header.appendChild(trEl);

  for (var i = 0; i < hours.length; i++) {
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
