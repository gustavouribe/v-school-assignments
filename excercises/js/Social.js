//speed dating site

function User(firstName, age, gender, hair, eyeColor, height, languagesSpoken, phoneNumber, ethnicity, physique, downFor, ){
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
    this.hair = hair;
    this.eyeColor = eyeColor;
    this.height = height;
    this.languagesSpoken = languagesSpoken;
    this.phoneNumber = phoneNumber;
    this.ethnicity = ethnicity;
    this.physique = physique;
    this.downFor = downFor;
    /*
    this.saying = saying;
    this.speak = function(){
      console.log(this.saying)
    */
    //}
  }

var users = []

users.push(new User("Gustavo", 32, "male", "black", 'brown', "5'10", ['english', 'spanish'], 8054532786, 'hispanic', [
    {  curvy: false },
    {  normal: false },
    {  fit: true },
    {  athletic: false },
  ] ))

var userTemplate = {  
    firstName: "Gustavo",
    age: 32,
    gender: "male",
    hair: 'black',
    eyeColor: 'brown',
    height: "5'10",
    languagesSpoken: ['english', 'spanish'],
    phoneNumber: 8054532786,
    ethnicity: "hispanic",
    physique: [
      {  curvy: false },
      {  normal: false },
      {  fit: true },
      {  athletic: false },
    ],
    downFor: [
        {
            coffee: true,
            drink: true,
            lateNightSnack: true,
            smokeBreak: [
                {cigerette: true,
                 fourTwentyFriendly: true,
                }
            ]
        },
    ],
    
    printDownFor: function(){
      console.log(userTemplate.downFor)
    }
}

console.log(userTemplate.printDownFor())

