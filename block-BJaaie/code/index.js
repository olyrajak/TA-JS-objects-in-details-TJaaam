//                                      Pseudoclassical Pattern
// *****************************************************************************

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`



function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;

}

Animal.prototype = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(NewLocation) {
        this.location = NewLocation;
    },

    summary() {
        returns `I live in ${this.location} and I have ${this.numberOfLegs}`
    }

};
// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`





function DogAnimal(name, location, numberOfLegs, color) {
    Animal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;


}
DogAnimal.prototype = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },

    changeName(newName) {
        this.name = newName;
    },
    changeColor(newColor) {
        this.color = newColor;
    },
    summary() {
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

};
Object.setPrototypeOf(DogAnimal.prototype, Animal.prototype);


// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`




CatAnimal.prototype = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(newName) {
        this.name = newName;
    },
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;

    }
}


function CatAnimal(name, location, numberOfLegs, colorOfEyes) {
    Animal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;

};
Object.setPrototypeOf(CatAnimal.prototype, Animal.prototype);

//                                      Class Pattern
//******************************************************************************* */
class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;

    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(NewLocation) {
        this.location = NewLocation;
    }

    summary() {
        returns `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}




class Dog {
    constructor(name, location, numberOfLegs, color) {
        super(location, numberOfLegs);
        this.color = color;
        this.name = name;
    }
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    }

    changeName(newName) {
        this.name = newName;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
    summary() {
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}



class Cat {
    Constructor(name, location, numberOfLegs, colorOfEyes) {
        super(location, numberOfLegs);
        this.colorOfEyes = colorOfEyes;
        this.name = name;
    }
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName) {
        this.name = newName;
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
    }
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;

    }
}