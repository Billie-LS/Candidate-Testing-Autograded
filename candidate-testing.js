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
let correctAnswers =[
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
]; 
// Declare and initialize variable candidateAnswers to empty array
let candidateAnswers = [];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // console.log(question);
  // candidateAnswer = input.question(question);  // code for part 1

  let response = '';
  // Iterate through each question
  // candidateAnswer.push(input.question(questions[i]))
  for (let i = 0; i < questions.length; i++) {
    // Ask the question and assign input answer to response
    response = input.question(questions[i]);
    // add value of response to array candidateAnswers
    candidateAnswers.push(response);
  }
  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  let correctAnswer = 0;
  for (let i = 0; i < candidateAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase())  // make case-insensitive
      correctAnswer+=1
      console.log(
        candidateAnswers[i] === correctAnswers[i]
          ? `\nGreat job! \n${candidateAnswers[i]} is the correct answer.`
          : `\nYou're answer ${candidateAnswers[i]} is incorrect.\nThe correct answer is: ${correctAnswers[i]}`
      );
  }
  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  correctAnswer > 0
    ? grade = (correctAnswer / 5) * 100
    : grade = 0
    console.log(
      grade > 79
      ? `\nGreat job! You have achieved a passing score with \n${grade}% correct.`
      : `\nUnfortunately you have not passed this examination. \n${grade}% is a failing score.`
    )
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello ${candidateName}, I hope you have studied for this quiz!`);
  askQuestion();
  // candidateAnswer = askQuestion();
  // console.log(candidateAnswer);
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