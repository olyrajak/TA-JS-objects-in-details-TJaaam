// ###
// For single question we need the following data and methods:

//     -Data:
//     -`title` (title of the question) -
//     `options` (array of options) -
//     `correctAnswerIndex` (index of the correct option) -
//     Methods:
//     -`isAnswerCorrect` (will accept the index and returns `true`
//         or `false`
//         based on the answer is correct or not) -
//     `getCorrectAnswer` (will
//         return the correct answer of the quiz when the
//         function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// -
// Prototypal pattern of object creation(Put methods inside an object and create object using Object.create) -
//     Pseudoclassical Pattern(Put methods inside F.prototype and use `new`
//         to call
//         function) -
//     Create using class -
//     Write test by creating two objects also test both methods.

// ###To test use the following data

// You can use the data given below.You will also have to change the name of the
// function
// while calling them.

// ``
// `js
// let firstQuestion = new Question(
//   'Where is the capital of Jordan',
//   ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   1
// );
// let secondQuestion = new Question(
//   'Where is the capital of Jamaica',
//   ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//   2
// );

// ==========================================================================================================
// Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// ==========================================================================================================

let questionMethod = {
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;

    },

    correctAnswerIndex() {
        return this.options[this.correctAnswerIndex];
    }

}

function question(title, options, correctAnswerIndex) {
    let quiz = object.create(questionMethod)
    quiz.title = title;
    quiz.options = options;
    quiz.isAnswerCorrect = correctAnswerIndex
    return quiz;


}
let firstQuestionWithPrototypePattern = new Question(
    'Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestionWithPrototypePattern = new Question(
    'Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);


// ==========================================================================================================
// Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// ==========================================================================================================

function question(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.isAnswerCorrect = correctAnswerIndex

}

question.prototype = {
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;

    },

    correctAnswerIndex() {
        return this.options[this.correctAnswerIndex];
    }
}

let firstQuestionWithPseudoclassicalPattern = new Question(
    'Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestionWithPseudoclassicalPattern = new Question(
    'Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);


// ==========================================================================================================
// Create using class
// ==========================================================================================================

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.isAnswerCorrect = correctAnswerIndex
    }
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;

    }

    correctAnswerIndex() {
        return this.options[this.correctAnswerIndex];
    }
}
let firstQuestionWithClass = new Question(
    'Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestionWithClass = new Question(
    'Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);
