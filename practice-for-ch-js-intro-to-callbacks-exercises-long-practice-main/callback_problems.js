class Clock {
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
      this.myDate = new Date();
      setInterval(this._tick.bind(this), 1000)

    }
    getHours() {
        return this.myDate.getHours();
    }
    getMinutes() {
        return this.myDate.getMinutes();
    }
    getSeconds() {
        return this.myDate.getSeconds();
    }

    getMyDate() {
        this.printTime();
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(this.myDate.getHours().toString() + ":" + 
      this.myDate.getMinutes().toString() + ":" + 
      this.myDate.getSeconds().toString());
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.myDate.setSeconds(this.myDate.getSeconds() + 1)
      this.printTime();
    }
  }
  
//   const clock = new Clock();
//   console.log(clock.getMyDate());
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("enter a number: ", function(answer) {
            num = parseInt(answer);
            sum += num;
            console.log(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);
        })
    } else if (numsLeft === 0) {
        completionCallback(sum);
        rl.close();
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function myBind(context) {
    return () => {
        this.apply(context);
    }
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
}
  
const turnOn = function() {
console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

function absurdBubbleSort(arr, sortCompletionCallback) {

}

function askIfGreaterThan(el1, el2, callback) {
    rl.question(`is ${el1} > ${el2} ?`, function(answer) {
        if (answer === "yes") {
            callback(true);
        } else if (answer === "no") {
            callback(false);
        }
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    
}


