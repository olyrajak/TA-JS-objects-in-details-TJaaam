/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
    let PersonObj = {
        name: name,
        age: age
    }
    return PersonObj;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
    greet: function() {
        console.log('Hello');
    }
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
    let PersonObj = Object.create(personStore);
    PersonObj.name = name;
    PersonObj.age = age;
    return PersonObj;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
};
sandra.introduce();

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
    this.greet = function() {
        console.log("Hello!");
    };
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
    let Person = new PersonConstruct;
    Person.name = name;
    Person.age = age;
    return Person;
}

var mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
personStore.protoyype.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
};
mike.introduce();

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello");
    }


}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

class DeveloperClass extends PersonClass {
    constructor(name) {
        super(name);
    }
    introduce() {
        console.log(`Hello World, my name is ${this.name}`);
    }
}
// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
    sayType: function() {
        console.log('I am a ' + this.type);
    },
};

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = 'User';
    user.name = name;
    user.score = score;
    return user;
}

var adminFunctionStore = Object.create(userFunctionStore); /* Put code here */

function adminFactory(name, score) {
    let admin = userFactory(name, score);
    Object.setPrototypeOf(admin, userFunctionStore);
    admin.type = 'admin';
    return admin;

    // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);
adminFunctionStore.prototype.sharePublicMessage = function() {
    console.log(`Welcome user!`);
};
// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"