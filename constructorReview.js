//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function (species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food || [];
    this.food.push('pet food');
};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
var person = function ( name, age, height, gender) {
    var obj = {
        name: name,
        age: age,
        height: height,
        gender: gender
    }
    return obj;
}

//Create a animal array and a person array.

  //code here
var animals = [];
var persons = [];

//Create two instances of Animal and push those into your animal array

  //code here
var dog = new Animal('canine', 'Cody', 4, 'black', ['chow', 'cats']);
var cat = new Animal('feline','Puss in boots', 4, 'calico');

//Create two instances of person and push those into your person array.

  //code here
var me = person('Dan', 26, "6'3", 'male');
var you = person('Abbie', 23, "5'2", 'female');

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function () {
    console.log(this.name + " ate " + this.food[Math.floor(Math.random() * this.food.length)])
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
//no person is a maker function not a constructor and therefor has no prototype to apply a function to every instance







/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  // javascript adds a few lines of code for us, creates an obj called 'this' and returns 'this' after it is assigned values
  2) What's a good way to describe the keyword 'this'
  // this in the context of constructors is an object placeholder or variable used to reference the current obj being made or acted on by a function
  3) Can a normal function which creates an object and then returns that object use the prototype?
  // no a prototype itself is a byproduct of the constructor format
  4) What happens if you forget to use 'new' when calling a constructor?
  // it does not initialize a this obj placeholder and therefor returns nothing, the variable remains undefined
*/