'use strict';

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

function expenseCalculator(expenses: number[]): void {
    let totalSpending: number = 0;
    let mostExpensive: number = 0;
    let cheapest: number = 0;
    for (let i: number = 0; i < expenses.length; i++) {
        totalSpending += expenses[i];
    }
    for (let i: number = 0; i < expenses.length; i++) {
        if (mostExpensive < expenses[i]) {
            mostExpensive = expenses[i];
        }
    }
    for (let i: number = 0; i < expenses.length; i++) {
        if (cheapest !== 0 && cheapest < expenses[i]) {
        } else if (cheapest !== 0 && cheapest > expenses[i]) {
            cheapest = expenses[i];
        } else {
            cheapest = expenses[0];
        }
    }
    console.log('Total spending: ' + totalSpending);
    console.log('Average spending: ' + Math.floor(totalSpending / expenses.length));
    console.log('Greatest expense: ' + mostExpensive);
    console.log('Cheapest spending: ' + cheapest);
}

expenseCalculator(expenses);


// We are going to represent our expenses in a list containing integers.

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?