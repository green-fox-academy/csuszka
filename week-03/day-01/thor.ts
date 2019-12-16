/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let maunikaX = initialTx;
let maunikaY = initialTy;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    if(lightX-maunikaX === 0 && lightY-maunikaY < 0) {
        console.log('N');
        maunikaY --;
    }
    else if(lightX-maunikaX > 0 && lightY-maunikaY < 0) {
        console.log('NE');
        maunikaX--;
        maunikaY++;
    }
    else if(lightX-maunikaX > 0 && lightY-maunikaY === 0) {
        console.log('E');
        maunikaX--;
    }
    else if(lightX-maunikaX > 0 && lightY-maunikaY > 0) {
        console.log('SE');
        maunikaX--;
        maunikaY--;
    }
    else if(lightX-maunikaX === 0 && lightY-maunikaY > 0) {
        console.log('S');
        maunikaY--;
    }
    else if(lightX-maunikaX < 0 && lightY-maunikaY > 0) {
        console.log('SW');
        maunikaX++;
        maunikaY--;
    }
    else if(lightX-maunikaX < 0 && lightY-maunikaY === 0) {
        console.log('W');
        maunikaX++;
    }
    else (lightX-maunikaX < 0 && lightY-maunikaY < 0) {
        console.log('NW');
        maunikaX++;
        maunikaY++;
    }
    


    // A single line providing the move to be made: N NE E SE S SW W or NW
  
}