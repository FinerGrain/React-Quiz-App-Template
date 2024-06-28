// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import Bijtchey from '../../assets/images/Cheytjeboos.png'
import Dronken from '../../assets/images/Dronken.png'
import Samen from '../../assets/images/samen.jpg'
import Alles from '../../assets/images/Alles.png'
import Chocolade from '../../assets/images/Chocolade.jpg'
import Schaapje from '../../assets/images/Schaapje.jpg'
import Neus from '../../assets/images/neus.jpg'
import Au from '../../assets/images/Au.jpg'
import Cute from '../../assets/images/Cute.jpg'
import Fiasco from '../../assets/images/Fiasco.png'

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
      correctAnswers: ['2 Jaar 4 Maanden en 15 Dagen'],
      score: 10,
    },
    {
      question: 'Welke van de 3 doet Cheyenne het liefst',
      choices: ['Fietsen', 'Eten', 'Naar het strand',],
      type: 'MCQs',
      image: Alles,
      correctAnswers: ['Naar het strand'],
      score: 10,
    },
    {
      question:
        'Cheyenne is een dierenvriend',
      choices: ['Ja tuurlijk', 'Nee ze haat dieren'],
      image: Schaapje,
      type: 'boolean',
      correctAnswers: ['Ja tuurlijk'],
      score: 5,
    },
    {
      question: 'Hoe ver kan Cheyenne schieten met pijl en boog?',
      image: Neus,
      choices: ['10 meter', '30 meter', '50 meter', '80 meter+'],
      type: 'MCQs',
      correctAnswers: ['80 meter+'],
      score: 10,
    },
    {
      question:
        'Wat was er hier aan de hand?',
      choices: [
        'Cheyenne had gevochten met een beer',
        'Simon heeft Cheyenne mishandeld',
        'Cheyenne had jeuk',
        'Cheyenne was van de scooter gepleurd',
        
      ],
      type: 'MAQs',
      image: Au,
      correctAnswers: [
        'Cheyenne was van de scooter gepleurd',
      ],
      score: 10,
    },
    {
      question: 'Waar wil Cheyenne het allerliefst heen op vakantie?',
      choices: [
        'Madeira',
        'Indonesië',
        'Hawaï',
        'Zuid-Afrika',
      ],
      type: 'MCQs',
      image: Cute,
      correctAnswers: ['Hawaï'],
      score: 10,
    },
    {
      question: 'Wat is Cheyenne haar favoriete Chocolade reep',
      choices: [
        'Milka Oreo',
        'Jumbo Peanut Carmel',
        'Tony Chocolonely salted caramel',
        'Lidl chocolade reep',
      ],
      type: 'MCQs',
      image: Chocolade,
      correctAnswers: [
        'Jumbo Peanut Carmel',
      ],
      score: 10,
    },
    {
      question: 'Is Simon het beste vriendje ?',
      choices: ['Ja', 'Ja echt heel erg', 'Ja Ja','Ja extreem','Ja duhh','Jaaaaaaaaa',],
      type: 'boolean',
      image: Fiasco,
      correctAnswers: ['Ja', 'Ja echt heel erg', 'Ja Ja','Ja extreem','Ja duhh','Jaaaaaaaaa',],
      score: 15,
    },
  ],
}
