// @TODO: YOUR CODE HERE!
// Load data from hours-of-tv-watched.csv
d3.csv("assets/data/data.csv").then(function(censusData) {

    console.log(censusData);
  
    // log a list of names
    var names = censusData.map(data => data.name);
    console.log("names", names);
  
    // Cast each hours value in censusData as a number using the unary + operator
    censusData.forEach(function(data) {
      data.hours = +data.hours;
      console.log("Name:", data.name);
      console.log("Hours:", data.hours);
    });
  }).catch(function(error) {
    console.log(error);
  });