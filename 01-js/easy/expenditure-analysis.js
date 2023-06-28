/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length==0){
    return ([]);
  }
  let catArray=[{category:transactions[0].category,totalSpent:0}];
  let catAdded=false;
    for (var j=0;j<transactions.length;j++){
      catAdded=false
      for(var i=0;i<catArray.length;i++){
        if(catArray[i].category == transactions[j].category){
          catArray[i].totalSpent += transactions[j].price;
          catAdded=true;
          break;
        }
      catAdded=false;  
      }
      if (catAdded==false){
        catArray.push({category:transactions[j].category,totalSpent:transactions[j].price})
      }
    }
  console.log(catArray);
  return (catArray);
}

module.exports = calculateTotalSpentByCategory;
