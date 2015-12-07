
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

}}






pikePlace.render();
