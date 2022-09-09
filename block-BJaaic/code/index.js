// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


let animalMethod = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(NewLocation) {
        this.location = NewLocation;
    },

    summary() {
        returns `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function animal(location, numberOfLegs) {
    let animalObject = Object.create(animalMethod);
    animalObject.location = location;
    animalObject.numberOfLegs = numberOfLegs;
    return animalObject;
}


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


let dogMethod = {
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

}


function DogAnimal(name, location, numberOfLegs, color) {
    let dog = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(dog, dogMethod)
    dog.name = name;
    dog.color = color;
    return dog;

}
Object.setPrototypeOf(dogMethods, animalMethod);


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




let catMethod = {
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
    let cat = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(dog, catMethod)
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return dog;

}
Object.setPrototypeOf(catMethod, animalMethod);