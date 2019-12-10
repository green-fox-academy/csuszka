let shoppingList: string[] = ['Eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

function isItThere (list: string [], item: string): void {
    let checker: number = 0;
    for ( let i: number = 0; i < list.length; i++){
if (item == list [i]){
    checker += 1;
}
    }
    if(checker != 0){
        console.log('Already on the list');
    } else{
        console.log('Not on the list');
    }

}

isItThere(shoppingList, 'milk');
isItThere(shoppingList, 'bananas');

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?