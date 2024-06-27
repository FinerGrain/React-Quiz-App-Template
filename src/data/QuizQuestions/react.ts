// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'
import Bijtchey from '../../assets/images/Cheytjeboos.png'
import Dronken from '../../assets/images/Dronken.png'
import Samen from '../../assets/images/samen.jpg'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: 'Wat doet Cheyenne het allerliefst als ze alcohol heeft gedronken?',
      choices: [
        'Feesten',
        'Spelletjes',
        'Sporten',
        'Slapen',
      ],
      type: 'MCQs',
      image: Dronken,
      correctAnswers: [
        'Slapen',
      ],
      score: 10,
    },
 
    
    {
      question: 'Waar zijn deze Fotootjes gemaakt',
      choices: [
        'Barcelona',
        'Budapest',
        'Ardenne',
        'Londen',
      ],
      type: 'MCQs',
      image: Bijtchey,
      correctAnswers: ['To define the structure and appearance of the user interface'],
      score: 10,
    },
    {
      question:
        'Hoelang hebben Cheyenne en Simon al een relatie?',
      choices: [
        '2 Jaar 3 maanden en 16 dagen',
        '2 Jaar 4 Maanden en 15 Dagen',
        '2 Jaar 4 Maanden en 13 Dagen',
        '2 Jaar 5 Maanden en 14 Dagen',
        '2 Jaar 3 Maanden en 12 Dagen',
        '2 Jaar 6 Maanden en 11 Dagen',
        
      ],
      type: 'MAQs',
      image: Samen,
      correctAnswers: ['componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      score: 10,
    },
    {
      question: 'Welke van de 3 doet Cheyenne het liefst',
      image: CodeSnippet1,
      choices: ['Fietsen', 'Eten', 'Naar het strand',],
      type: 'MCQs',
      correctAnswers: ['Count: 0'],
      score: 10,
    },
    {
      question:
        'In React, props are used to pass data from parent components to child components.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the output of the following code snippet?',
      image: CodeSnippet1,
      choices: ['0', '1', '2', 'undefined'],
      type: 'MCQs',
      correctAnswers: ['0'],
      score: 10,
    },
    {
      question:
        'Which of the following are valid ways to conditionally render content in React? (Select all that apply)',
      choices: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the switch statement',
        'Using the && operator',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the && operator',
      ],
      score: 10,
    },
    {
      question: 'In React, what is the purpose of keys in lists?',
      choices: [
        'To provide a unique identifier for each item in the list',
        'To control the order of items in the list',
        'To enable sorting and filtering of the list',
        'To handle user interactions within the list',
      ],
      type: 'MCQs',
      correctAnswers: ['To provide a unique identifier for each item in the list'],
      score: 10,
    },
    {
      question: 'What will be the result of the following React code?',
      code: `import React from 'react';

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const App = () => {
  return <Button />;
};

export default App;`,
      choices: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
        'The button will not respond to the click event',
        'An error will occur due to the incorrect usage of onClick',
        'The button will display but nothing will happen when clicked',
      ],
      type: 'MCQs',
      correctAnswers: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
      ],
      score: 10,
    },
    {
      question: 'Is Simon het beste vriendje ?',
      choices: ['True', 'True'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 15,
    },
  ],
}
