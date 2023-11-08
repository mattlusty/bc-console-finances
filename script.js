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
