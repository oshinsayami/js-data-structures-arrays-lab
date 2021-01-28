// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(){
    drivers.push("Ralph")
}

function destructivelyPrependDriver(){
    drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
drivers.pop();
}

function destructivelyRemoveFirstDriver(){
 drivers.shift();
}

function appendDriver(name){
    return [...drivers, name];
}

function prependDriver(name){
    return [name, ...drivers];
}

function removeFirstDriver(){
    return drivers.slice(1);
}

function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1);
}
