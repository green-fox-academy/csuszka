'use strict';

let productList
    = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}

function productStatistics(products) {
    // How much is the fish?
    console.log('The chase is better than the catch! The fish costs: ' + products['Fish']);
    // What is the most expensive product?
    let mostExpensive = 0;
    for (let item in products) {
        if (products[item] > mostExpensive) {
            mostExpensive = products[item];
        }
    }
    for (let item in products) {
        if (products[item] == mostExpensive) {
            console.log('The most expensive item is ' + item);
        }
    }
    console.log
    // What is the average price?
    let totalPrice = 0;
    for (let item in products) {
        totalPrice += products[item];
    }
    console.log('The average price is ' + Math.floor(totalPrice / Object.keys(products).length));
    // How many products' price is below 300?
    let below300 = 0;
    for (let item in products) {
        if (products[item] < 300) {
            below300++;
        }
    }
    console.log('There are ' + below300 + ' items for less than 300');
    // Is there anything we can buy for exactly 125?
    for (let item in products) {
        if (products[item] === 125) {
            console.log('There is an item you can buy for 125');
            break;
        } else {
            console.log('There is no item you can buy for 125');
            break;
        }
    }
    // What is the cheapest product?
    let cheapestItem = totalPrice;
    for (let item in products) {
        if (products[item] < cheapestItem) {
            cheapestItem = products[item];
        }
    }
    for (let item in products) {
        if (products[item] == cheapestItem) {
            console.log('The cheapest item is ' + item);
        }
    }
}

productStatistics(productList);
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

// How much is the fish?
// What is the most expensive product?
// What is the average price?
// How many products' price is below 300?
// Is there anything we can buy for exactly 125?
// What is the cheapest product?