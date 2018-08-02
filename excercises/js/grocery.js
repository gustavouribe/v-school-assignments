var shopper = {  
    firstName : 'Gustavo',
    lastName : 'Uribe',
    age: 32,
    person: true,
    fullName: function() {
        return "full name: " + shopper.firstName + shopper.lastName;},
    groceryCart: ['milk', 'cheese', 'eggs']
 }
console.log(shopper.fullName)

