var cup = {  
    color: "white",
    price: 10,
    isCoffeeCup: true,
    write: function() {
        console.log("I'm a " + this.color + " cup that costs $" + this.price);
    }
}
var monitor = {  
    color: "Black",
    price: 100,
    HD: true,
    write: function() {
        console.log("I'm a " + this.color + " monitor that costs $" + this.price);
    }
}
var waterBottle = {  
    color: "grey",
    price: 8,
    thermal: true,
    write: function() {
        console.log("I'm a " + this.color + " watter bottle that costs $" + this.price);
    }
}
console.log(monitor.write())

