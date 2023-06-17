/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  let transaction_object = {};
  transactions.forEach((transaction) => {
    transaction_object[transaction.category] = transaction_object[
      transaction.category
    ]
      ? transaction_object[transaction.category] + transaction.price
      : transaction.price;
  });
  Object.keys(transaction_object).forEach((key) => {
    output.push({ category: key, totalSpent: transaction_object[key] });
  });
  return output;
}

module.exports = calculateTotalSpentByCategory;

// [{'Food' : 5}, {'Clothing' :19}, {'Electronics' : 3}, {'Food': 2}, {x: 2}]
// {
//   Food: 7
//   Clothing: 19
//   Electronics: 3
// }
// [
//   { category: 'Food', totalSpent: 30 },
//   { category: 'Clothing', totalSpent: 40 },
//   { category: 'Electronics', totalSpent: 30 }
// ]
