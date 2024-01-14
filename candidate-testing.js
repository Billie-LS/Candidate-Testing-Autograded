// added to
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// Define candidateName to empty string
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// Initialize question 
let question = "Who was the first American woman in space? ";
// Initialize correctAnswer
let correctAnswer = "Sally Ride"
// set candidateAnswer to empty string
let candidateAnswer = '';


//TODO: Variables for Part 2

let questions = [
  'Who was the first American woman in space? ',  // index 0
  'True or false: 5 kilometer == 5000 meters? ',  // index 1
  '(5 + 3)/2 * 10 = ? ',  // index 2
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",  // index 3
  'What is the minimum crew size for the ISS? '  // index 4
];
let correctAnswers =[
  "Sally Ride",  // index 0
  "true",  // index 1
  "40",  // index 2
  "Trajectory",  // index 3 
  "3"  // index 4, text implies datatype number but only works with datatype string
];
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // console.log(question);
  // candidateAnswer = input.question(question);  // code for part 1
  
  // iterate questions array 
  for (let i = 0; i < questions.length; i++) {
    // reassign candidateAnswers to array with each iterations
    candidateAnswers[i] = input.question(questions[i]);
  }
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  // Conditional (ternary) operator 
  // reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
  console.log((candidateAnswer === correctAnswer) ?`\nGreat job! \n${candidateAnswer} was the first American woman in space.` : `\nYou're answer ${candidateAnswer} is incorrect.\nThe correct answer is: ${correctAnswer}`);

  // 'switch' statement
  // reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
  // switch (candidateAnswer) {
  //   case correctAnswer:
  //     console.log(`\nGreat job! \n${candidateAnswer} was the first American woman in space.`);
  //     break;
  //   default:
  //     console.log(`\nYou're answer ${candidateAnswer} is incorrect.\nThe correct answer is: ${correctAnswer}`);
  // }

  // Standard if/else statement
  // if (candidateAnswer === correctAnswer) {  // test is candidateAnswer = correctAnswer; correctAnswer = "Sally ride"
  //   console.log(`\nGreat job! \n${candidateAnswer} was the first American woman in space.`);  
  // } else {
  //   console.log(`\nYou're answer ${candidateAnswer} is incorrect.\nThe correct answer is: ${correctAnswer}`);
  // }


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}, I hope you have studied for this quiz!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};