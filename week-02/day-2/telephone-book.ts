'use strict';

let phonebook = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
}

function lookUp(pbook, name, phone, exist): void {
    console.log('The number for ' + name + ' is ' + pbook[name]);
    for (let pro in pbook){
        if(pbook[pro] === phone){
        console.log('The owner of the number ' + phone + ' is ' + pro);}
    }

    if (pbook.hasOwnProperty(exist)) {
        console.log('We have the phone number for ' + exist);
    } else {
        console.log('We don\'t have the phone number for ' + exist);
    } 
}

lookUp(phonebook, 'John K. Miller', '307-687-2982', 'Chris E. Myers');

// Create a map with the following key-value pairs.

// Name (key)	Phone number (value)
// William A. Lathan	405-709-1865
// John K. Miller	402-247-8568
// Hortensia E. Foster	606-481-6467
// Amanda D. Newland	319-243-5613
// Brooke P. Askew	307-687-2982
// Create an application which solves the following problems.

// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?