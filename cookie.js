var hours = [10am, 11am, noon, 1pm, 2pm, 3pm, 4pm, 5pm];
var pikePlace = {
  minCustomersPerHr = 17;
  maxCustomerPerHr = 88;
  avgCookiesPerCustomer = 5.2;

  randCustomerPerHr: function(min, max) {
    var randomNum = Math.floor(Math.random()(88 - 17) + 17);
    var el = document.getElementbyID('Customers per Hour')
  }


    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode('Customers per Hour'));
//     // Generate a random number based on min and max arguments passed in when this function is called
},
//
  generateHourly: function() {
    avgCookiesPerCustomer * randomNum = cookiesNeededPerHour[i];
    for (var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');

    liEl.textContent = hours[i];
  }

    ulEl.appendChild(liEl);



//       // Generate a random amount of cookies (avg * random num)
//       // Push the value to the hourly cookies array
//       // Add the value to the daily cookie total
//   },
//
//   render: function() {
//     // Create a UL Element
//     // Append a textNode to the UL element that will display the name of the store
//     // Assign the store_data element to a variable; document.getElementById
//     // Append the Ul element to your HTML document
//
//     // For each index in the hours array:
//       // Create an LI element
//       // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
//       // Append the LI element to the UL element as a Child
//
//     // Create an LI element
//     // Assign the content of your stores Daily Total to the LI element
//     // Append the LI element to the UL as a Child
//   }
// };
// // Call your render function
