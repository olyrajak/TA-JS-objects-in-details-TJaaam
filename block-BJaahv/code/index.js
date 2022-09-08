// =================================================================
// [ ] Using function to create object
// =================================================================

function user(name, id, noOfProjects) {
    let Obj = {}
    Obj.name = name;
    Obj.id = id;
    Obj.noOfProjects = noOfProjects
    Obj.getProjects = function() {
        return Obj.getProjects

    };
    Obj.changeName = function(NewName) {
        this.NewName = NewName;
        return this.name;

    };

    Obj.incrementProject = function(value = 1) {
        this.noOfProjects = this.noOfProjects + value
        return this.noOfProjects
    };

    Obj.decrementProject = function(value = 1) {
        this.noOfProjects = this.noOfProjects - value
        return this.noOfProjects
    };
    return Obj;

}
let user3 = new User("Rahul", 35, 67);
console.log(user3.changeName("Oly"));
console.log(user3.incrementProject());
console.log(user3.decrementProject());
let user4 = new User("Riya", 2, 34);
console.log(user4.changeName("Jaya"));
console.log(user4.incrementProject());
console.log(user4.decrementProject());



// =================================================================
// [ ] Using Object.create (prototypal pattern)
// =================================================================

let UserMethod = {
    getProjects() {
        return Obj.getProjects

    },
    changeName(NewName) {
        this.NewName = NewName;
        return this.name;

    },

    incrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects + value
        return this.noOfProjects
    },

    decrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects - value
        return this.noOfProjects
    }
}

function User(name, id, noOfProjects) {
    let Obj = Object.create(UserMethod);
    Obj.name = name;
    Obj.id = id;
    Obj.noOfProjects = noOfProjects;
    return Obj;


}

let user5 = new User("Rahul", 35, 67);
console.log(user5.changeName("Oly"));
console.log(user5.incrementProject());
console.log(user5.decrementProject());
let user6 = new User("Riya", 2, 34);
console.log(user6.changeName("Jaya"));
console.log(user6.incrementProject());
console.log(user6.decrementProject());


// =================================================================
// [ ] Using Pseudoclassical Way
// =================================================================

function User(name, id, noOfProjects) {

    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;


}
User.prototype = {
    getProjects() {
        return noOfProjects;
    },
    changeName(newName) {
        this.newName = newName;
        return this.name;
    },
    incrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects - value;
        return this.noOfProjects;
    },
};

let user7 = new User("Rahul", 35, 67);
console.log(user7.changeName("Oly"));
console.log(user7.incrementProject());
console.log(user7.decrementProject());
let user8 = new User("Riya", 2, 34);
console.log(user8.changeName("Jaya"));
console.log(user8.incrementProject());
console.log(user8.decrementProject());

// =================================================================
// [ ] Using Class
// =================================================================

class User {
    constructor(name, id, noOfProjects) {
        this.name = name
        this.id = id
        this.noOfProjects = noOfProjects
    }
    getProjects() {
        return noOfProjects
    }
    changeName(NewName) {
        this.NewName = NewName
        return this.name
    }
    incrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects + value
        return this.noOfProjects
    }
    decrementProject(value = 1) {
        this.noOfProjects = this.noOfProjects - value
        return this.noOfProjects
    }
}

let user1 = new User("Rahul", 35, 67);
console.log(user1.changeName("Oly"));
console.log(user1.incrementProject());
console.log(user1.decrementProject());
let user2 = new User("Riya", 2, 34);
console.log(user2.changeName("Jaya"));
console.log(user2.incrementProject());
console.log(user2.decrementProject());