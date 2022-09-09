## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js
class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  eat() {
    console.log(`I am ${this.name} And I  Eat`)
  }
  sleep() {
    console.log(`I am ${this.name} And I  Sleep`)
  }
  walk() {
    console.log(`I am ${this.name} And I  Walk`)
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsman) {
    super(name, age, gender)
    this.sportsman = sportsman
  }
  play() {
    console.log(`I am ${this.name} and I Play ${this.sportsman}`)
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender)
    this.instituteName = instituteName
  }
  teach() {
    console.log(`I am ${this.name} and I teach at ${this.institute}`)
  }
}
class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender)
    this.kind = kind
  }
  createArt() {
    console.log(`I am ${this.name} and I am an ${this.kind}`)
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName)
    this.teamName = teamName
  }
  playCricket() {
    console.log(`I am ${this.name} and I play cricket for ${this.teamName}`)
  }
}
```
