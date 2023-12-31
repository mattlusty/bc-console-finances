console.log("Financial Analysis");
console.log("------------------");

var months = finances.length;

console.log("Total Months:", months);

// console.log("----------");

var sum = 0;

// Total Profit/Loss

for (i in finances) {
  // console.log(finances[i][1]);
  sum += finances[i][1];
}

console.log("Total Profit/Loss: $" + sum);

// Profit/Loss changes per month

// Previous month before first month - Profit unknown
finances[0][2] = null;

for (var i = 1; i < finances.length; i++) {
  finances[i][2] = finances[i][1] - finances[i - 1][1];
}

// not required - but useful to see for debugging

// console.log("Finances array (with added monthly change in profit):", finances);

// console.log("----------");

// Total of all changes

var totalChange = 0;

for (var i = 1; i < finances.length; i++) {
  totalChange += finances[i][2];
}

console.log("Total Change:", totalChange);

// console.log("----------");

// Average Change (not including first month - because the change in unknown)

var averageChange = totalChange / (months - 1);

console.log("Average Change:", averageChange.toFixed(2));

// console.log("----------");

// Calculating the Greatest and Least Change

var greatest = 1;
var least = 1;

for (var i = 1; i < finances.length; i++) {
  if (finances[i][2] > finances[greatest][2]) {
    greatest = i;
  }
  if (finances[i][2] < finances[least][2]) {
    least = i;
  }
}

console.log(
  "Greatest Change in Profit: " + finances[greatest][0] + " ($" + finances[greatest][2] + ")"
);
console.log(
  "Greatest Decrease in Profit: " + finances[least][0] + " ($" + finances[least][2] + ")"
);

// console.log("----------");

// Sorting (to validate above method)

var sorted = finances.toSorted((a, b) => a[2] - b[2]);

// not required - but useful to see for debugging

// console.log("Sorted:", sorted);
