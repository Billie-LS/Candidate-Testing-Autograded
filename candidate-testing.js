// added to
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// Declare and initialize variable candidateName to empty string
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// Initialize question 
let question = "Who was the first American woman in space? ";
// Initialize correctAnswer
let correctAnswer = "Sally Ride"
// Declare and initialize variable candidateAnswer to empty string
let candidateAnswer = '';


//TODO: Variables for Part 2
// Declare and initialize variable questions to an array of questions
let questions = [
  'Who was the first American woman in space? ',  // index 0
  'True or false: 5 kilometer == 5000 meters? ',  // index 1
  '(5 + 3)/2 * 10 = ? ',  // index 2
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",  // index 3
  'What is the minimum crew size for the ISS? '  // index 4
];
// Declare and initialize variable correctAnswers to an array of answers
let correctAnswers =["Sally Ride", "true", "40", "Trajectory", "3"]; 
// Declare and initialize variable candidateAnswers to empty string
let candidateAnswers = [];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // console.log(question);
  // candidateAnswer = input.question(question);  // code for part 1
  
  // Initialize a variable to track correctness
  let correct = true;

  // Iterate through each question
  for (let i = 0; i < questions.length; i++) {
    // Ask the question and assign the response as candidateAnswer
    candidateAnswers[i] = input.question(questions[i]);

    // Check if the current candidate's answer is not equal to the correct answer
    if (candidateAnswers[i] !== correctAnswers[i]) {
      // If not equal, set correctness to false
      correct = false;
    }
  }
  return correct;  // Return the correctness information
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  let areAnswersCorrect = askQuestion();  // Get the correctness information from askQuestion

  // Directly use the result of askQuestion in the condition
  // Directly use the result stored in the variable in the condition
  console.log(
    areAnswersCorrect
      ? `\nGreat job! \n${candidateAnswers} are the correct answers.`
      : `\nYou're answer ${candidateAnswers} is incorrect.\nThe correct answers are: ${correctAnswers}`
  );
  



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