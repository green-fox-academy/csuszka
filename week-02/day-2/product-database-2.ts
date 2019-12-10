'use strict';

let laProduces = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550,
}

function productSorter(produces) {
  // Which products cost less than 201? (just the name)
  let lessThan201 = 0;
  for (let item in produces) {
    if (produces[item] < 201) {
      lessThan201++;
    }
  }
  console.log('There are ' + lessThan201 + ' products which cost less than 201')
  // Which products cost more than 150? (name + price)
  let moreThan150 = 0;
  for (let item in produces) {
    if (produces[item] > 150) {
      moreThan150++;
    }
  }
  console.log('There are ' + moreThan150 + ' products which cost more than 150')
}

productSorter(laProduces);


// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
// Create an application which solves the following problems.

// Which products cost less than 201? (just the name)
// Which products cost more than 150? (name + price)