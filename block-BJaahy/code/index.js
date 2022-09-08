class Square {
    constructor(side) {
        this._height = side;
        this._width = side;
        this.numberOfTimes = 0;
    }
    description() {
        alert(`The square is ${_width} x ${_height}`)
    }
    calcArea() {
        return this._height * this._width;
    }
    get area() {
        this.numberOfTimes++;
        if (this.numberOfTimes >= 4) {
            alert(`Upper limit reached`);
        } else return this._width * this._height;
    }

    set area(value) {
        this._width = Math.sqrt(value);
        this._height = Math.sqrt(value);
    }
    static isEqual(square1, square2) {
        return square1.area === square2.area;
    }
}

let sq1 = new Square(6);
sq1.area;
sq1.calcArea();
let sq2 = new Square(36);
sq2.area;
sq2.calcArea();
Square.isEqual(sq1, sq2); // False



class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;

    }
    get fullName() {
        this._fullName = `${this._firstName} ${this._firstName}`;
        return this._fullName;
    }

    set fullName(name) {
        if (name.length < 3) {
            alert(`Full name should be more than 3 characters`);
        } else {
            this.first = name.split(" ")[0];
            this.last = name.split(" ")[1];
        }
    }
    nameContains(name) {
        return this.fullName.includes(name);
    }
}


let user1 = new User("Oly", "Rajak");
user1.fullName;
user1.nameContains("O");
let user2 = new User("Jaya", "Rajak");
user2.fullName;
user2.nameContains("y");