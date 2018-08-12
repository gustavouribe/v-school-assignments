var readlineSync = require("readline-sync");

///////////////////
//   VARIABLES  ///
///////////////////

var player = {
    name: "",
    hp: 100,
    inventory: [],
    //generates and returns a damage amount
        // console.log("you attacked enemy")
    attack: function(){
    // put in attack() method
        // if weapons arr is >= 1
            if (player.weapons.length >= 1){
                for (var i = 0; i <= player.weapons.length; i++){
                    if (player.weapons.length[i] === 'knife'){
                        console.log("you used your knife attack")
                        return Math.floor(Math.random() * 60 * 1)
                    } else if (player.weapons.length[i] === 'gun'){
                        console.log("you used your gun attack")
                        return Math.floor(Math.random() * 40 * 1)
                    }
                }
            } 
        return Math.floor(Math.random() * 20 * 1)
    },
    // print: function (){
    //     console.log(`name: ${player.name}, HP: ${player.hp}, inventory: ${player.inventory}`)
    // },
    weapons: [],
    money: 0
}
var gameLoopOptions = ['walk', 'check weapons', 'check cash']
var fightOptions = ['fight', 'flee']
var items = ['bullet proof vest', 'first aid kit', 'gun', 'knife', 'money']


//////////////////////
//   CONSTRUCTORS  ///
/////////////////////

function Enemy (type, health, item ){
    this.type = type;
    this.hp = health;
    this.item = item;
    this.attack = function(){
        return Math.floor(Math.random() * 20 * 1)
       
    }
    
  // generate and return a random attack power (number)
    
}



///////////////////
//   FUNCTIONS  ///
///////////////////

function printCash (){
        console.log(`cash: ${player.money}`)
    }
function printWeapons (){
        console.log(`Weapons: ${player.weapons}`)
    }





function walk(){
    // create a random chance either 1/3 or 1/4
    var battleChance = Math.floor(Math.random() * 3)
    // if it's 1
    if(battleChance === 0){
        //fight
        fight()
    } else if(battleChance === 1 || battleChance === 2){
        // if it's 0 or 2
        //keep on walking
        console.log("you just walked for a little bit...")
    }   
}





function fight(){
    var enemy = generateRandomEnemy()

    while(player.hp > 0 && enemy.hp > 0){

        // give user option to attack or run
        var fightChoice = readlineSync.keyInSelect(fightOptions, "Do you want to Attack or Run? ")
        //if attack
        if(fightChoice === 0){
            // player needs to damage enemy
            var pAttack = player.attack()
                enemy.hp -= pAttack
                
            // enemy needs to damage player   
            var eAttack = enemy.attack() 
                player.hp -= enemy.attack()
                
            /// consle.log how much player was hurt, and how much enemy was hurt
                console.log(`${player.name} was hurt ${eAttack} hp`)
                console.log(`${enemy.type} was hurt ${pAttack} hp`)
                if (enemy.hp <= 0){
                    console.log(`${enemy.type} is dead`)
                    console.log(`${player.name} hp = ${player.hp}`)
                    generateRandomItem()
                    // -------- this needs to be a function  
                    // console.log(`player recieved ${enemy.item}`)
                    // player.inventory.push(enemy.item)
                }

        } else if (fightChoice === 1){
            // random attack power
            // 1/2 chance of escaping
            // flee ()

            var fleeChance = Math.floor(Math.random() * 2)
                if(fleeChance === 0){
                    var eAttack = enemy.attack() 
                    player.hp -= enemy.attack()
                    console.log(`${enemy.type} attacked you and you couldn't escape`)
                    console.log(`${player.name} was hurt ${eAttack} hp`) 
                    
                
                } else if(fleeChance === 1){
                    
                    console.log("you fled")
                    break;
        }   

        }

    } 

    
}

function generateRandomEnemy(){
    var enemyChance = Math.floor(Math.random() * 3)
    var currentEnemy
    if (enemyChance === 0){
        currentEnemy = new Enemy("Zombie", 50)
        console.log('here comes a zombie')
    } else if (enemyChance === 1){
        currentEnemy = new Enemy("Ogre", 50)
        console.log('here comes a ogre')
    } else if (enemyChance === 2){
        currentEnemy = new Enemy("Mobster", 50)
        console.log('here comes a mobster')
    }
    return currentEnemy
}
// var items = ['bullet proof vest', 'first aid kit', 'gun', 'knife', 'money']
function generateRandomItem(){
    var itemChance = Math.floor(Math.random() * 4)
    // var currentItem
    if (itemChance === 0){
        player.hp += 200
        console.log('you got a bullet proof vest')
        console.log(`player hp: ${player.hp}`)
    } else if (itemChance === 1){
        player.hp += 50
        console.log('you got a first aid kit')
        console.log(`player hp: ${player.hp}`)
    } else if (itemChance === 2){
        player.weapons.push(items[2])
        console.log('you got a gun')
    } else if (itemChance === 3){
        player.weapons.push(items[3])
        console.log('you got a knife')
    } else if (itemChance === 4){
        player.hp += 50
        console.log('you got some scratch')
    }
    // return currentEnemy
}





///////////////////
//   GAME LOOP   //
///////////////////

player.name = readlineSync.question("WHAT IS YOUR NAME ADVENTURER?");
console.log("GREETINGS " + player.name + " WE NEED YOUR HELP!");


while(player.hp > 0){
    var userChoice = readlineSync.keyInSelect(gameLoopOptions, "What would you like to do? ")
    if(userChoice === 0){
        walk()
        //if the player won the battle
    } else if(userChoice === 1){
        printWeapons()
        
    } else if(userChoice === 2){
        printCash()
        
    } else if(userChoice === -1){
        console.log("One cannot simply cancel...")
    }
}





while(player.hp <= 0){
    console.log('you dead')
    break;
}



// GAME OVER //
console.log('yay you won/game over')
