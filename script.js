var months = finances.length;

console.log("Total Months:", months);

console.log("----------");

var sum = 0;

// Total Profit/Loss

for (i in finances) {
  // console.log(finances[i][1]);
  sum += finances[i][1];
}

console.log("Total Profit/Loss:", sum);

// Profit/Loss changes per month

// Previous month before first month - Profit unknown
finances[0][2] = null;

for (var i = 1; i < finances.length; i++) {
  finances[i - 1][2] = finances[i - 1][1] - finances[i][1];
}

console.log("Finances:", finances);

console.log("----------");

// Total of all changes

var totalChange;

for (var i = 1; i < finances.length; i++) {
  totalChange += finances[i][2];
}

console.log("Total Change:", totalChange);

console.log("----------");

// Average Change (not including first month - because the change in unknown)

var averageChange = totalChange / months - 1;

console.log("Average Change:", averageChange);

console.log("----------");
