// const array1 = [1, 2, 4];
// const array2 = [6, 2, 8];
// const newArray = [ ...array1, ...array2];
// // console.log([ ...array1, ...array2]);
// // console.log([ ...array1, ...array2]);
// // console.log(newArray);

// // make a shallow copy of the array
// const arrayCopy = [ ...newArray];
// console.log(arrayCopy);

// const sortFunction = (a, b) => a - b;
// const sortedArray = arrayCopy.sort(sortFunction);
// console.log(sortedArray);

// console.log("unsorted array", newArray, "sorted copy", arrayCopy);

// A class declaration starts with the keyword "class", followed by the class name (capital letter) and a "{" to start the class scope
class Animal {

    // A class has a special method "constructor"
    // Defining this method will define the arguments that need to be passed, and what is done with them when the object is created
    constructor(numberOfLegs, sound, foodType) {
      // Pro tip, if you don't want to forget to pass something in, throw an error if you don't:
      // if (!numberOfLegs) throw Error("You need to pass in numberOfLegs when creating a new Animal");
      // if (!sound) throw Error("You need to pass in sound when creating a new Animal");
      // if (!foodType) throw Error("You need to pass in foodType when creating a new Animal");

      // 'this' references the instance of the class that has been created.
      // If you want access to the parameters from the constructor, you need to assign them to corresponding properties on the 'this' object
      this.numberOfLegs = numberOfLegs;
      this.sound = sound;
      this.foodType = foodType

      // There's no reason not to do other stuff if you need to, but assignment happens VERY often in a class constructor
    }

    // To write a function that should belong to the class, just type it's name, then (), then the scope squiggly brackets of the function
    // Then fill in the function, and you're off to the races.
    makeSound() {
      // When inside a class's scope (the '{', and '}' at the start and end define it's scope)
      // 'this' will give access to all the variables the class has
      // similar to key-value pairs found in an object, there are key-value pairs in a class
      // I'll tell you a secret, classes are really just objects at the end of the day.
      // Everything objects have, classes do too. Mostly.
      // And classes are just a convenient way to encapsulate the idea of creating a new object.
      console.log(`The animal says ${this.sound}`)
    }

// A class ends with the matching closing "}" that matches the opening "{" at the declaration
}

const dog = new Animal(4, "woof", "meat")
dog.makeSound();


// You can also extend a class.
// This means that everything the Animal had, you now have.
// It's similar to doing something like the following:
// const obj1 = { key1: "value 1" }
// const obj1WithMore = { ...obj1, key2: "value2" }
// The key difference is that a constructor function runs with the new class and the old class, where in the example, there is no such constructor.
class Dog extends Animal {
  constructor() {
    super(4, 'woof', 'meat')
    // if you have extended a class, you can access what you extended by the "super" key word.
    // Just like 'this', 'super' refers to the class that has been extended from, but only when referring to the constructor
    // If you want to call the Animal constructor, just call super()

    // You can't use super for things other than the constructor though, for other purposes, this works just fine.
    // You'll have access to all the Animal properties and methods inside the scope of the Dog class via 'this' just from having extended from it.
    console.log('Creating a dog class, "this" sound =', this.sound);
  }
}

const anotherDog = new Dog();