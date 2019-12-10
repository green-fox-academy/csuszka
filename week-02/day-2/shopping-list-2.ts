'use strict';

let priceList = {
  'Milk': 1.07,
  'Rice': 1.59,
  'Eggs': 3.14,
  'Cheese': 12.60,
  'Chicken Breasts': 9.40,
  'Apples': 2.31,
  'Tomato': 2.58,
  'Potato': 1.75,
  'Onion': 1.10
};

let bobList = {
  'Milk': 3,
  'Rice': 2,
  'Eggs': 2,
  'Cheese': 1,
  'Chicken Breasts': 4,
  'Apples': 1,
  'Tomato': 2,
  'Potato': 1
}

let aliceList = {
  'Rice': 1,
  'Eggs': 5,
  'Chicken Breasts': 2,
  'Apples': 1,
  'Tomato': 10
}

function calculator(prices, shopper1, shopper2): void {
  // How much does Bob pay?
  let bobTotal: number = 0;
  for (let item in shopper1) {
    bobTotal += shopper1[item];
  }
  console.log('Bob paid ' + bobTotal);
  // How much does Alice pay?
  let aliceTotal: number = 0;
  for (let item in shopper2) {
    aliceTotal += shopper2[item];
  }
  console.log('Alice paid ' + aliceTotal);
  // Who buys more Rice?
  if (bobList['Rice'] > aliceList['Rice']) {
    console.log('Bob bought more rice');
  } else {
    console.log('Alice bought more rice');
  }
  // Who buys more Potato?
  if (bobList['Potato'] > aliceList['Potato']) {
    console.log('Bob bought more potato');
  } else {
    console.log('Alice bought more potato');
  }
  // Who buys more different products?
  let bobCounter = 0;
  let aliceCounter = 0;
  for (let item in shopper1) {
    bobCounter += 1
  }
  for (let item in shopper2) {
    aliceCounter += 1
  }
  if (bobCounter === aliceCounter) {
    console.log('They bought the same amount of different products');
  }
  else if (bobCounter > aliceCounter) {
    console.log('Bob bought more different products');
  } else {
    console.log('Alice bought more different products');
  }
  // Who buys more products? (piece)
  let bobProductCounter = 0;
  let aliceProductCounter = 0;
  for (let item in shopper1) {
    bobProductCounter += 1
  }
  for (let item in shopper2) {
    aliceProductCounter += 1
  }
  if (bobProductCounter === aliceProductCounter) {
    console.log('They bought the same pieces of items');
  }
  else if (bobProductCounter > aliceProductCounter) {
    console.log('Bob bought more pieces of items');
  } else {
    console.log('Alice bought more pieces of items');
  }
}

calculator(priceList, bobList, aliceList);

// Represent the following products with their prices

// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
// Represent Bob's shopping list

// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
// Represent Alice's shopping list

// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
// Create an application which solves the following problems.

// How much does Bob pay?
// How much does Alice pay?
// Who buys more Rice?
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)