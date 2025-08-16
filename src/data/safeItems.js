// src/data/safeItems.js

// importing images - used as props data later in components
import knifeImg from '../images/knife.jpg';
import teddyImg from '../images/teddyBear.jpg';
import stoveImg from '../images/stove.jpg';
import bookImg from '../images/book.jpg';
import cleaningImg from '../images/cleaning.jpg';
import appleImg from '../images/apple.jpg';
import scissorsImg from '../images/scissors.jpg';
import soccerImg from '../images/soccer.jpg';
import pillsImg from '../images/pills.jpg';
import dogImg from '../images/dog.jpg';
import matchImg from '../images/matchstick.jpg';
import bicycleImg from '../images/bicycle.jpg';

// data array - static data used for rendering lists in components
const items = [
  {
    id: 1, // key property for lists
    name: 'Knife',
    image: knifeImg,
    question: 'Is it safe to touch this?',
    isSafe: false, // boolean used for conditional rendering
    explanation: { // object containing messages for conditional feedback
      correct: "Good job! Knives are sharp and for grown-ups. Always ask an adult for help.",
      incorrect: "Be careful! Knives are sharp and can hurt you. Never touch them without an adult."
    }
  },
  {
    id: 2,
    name: 'Teddy Bear',
    image: teddyImg,
    question: 'Is it safe to play with this?',
    isSafe: true,
    explanation: {
      correct: "That's right! Teddy bears are soft and safe toys to play with.",
      incorrect: "It's okay to play with this one! Teddy bears are actually soft and safe toys."
    }
  },
  {
    id: 3,
    name: 'Hot Stove',
    image: stoveImg,
    question: 'Is it safe to touch this?',
    isSafe: false,
    explanation: {
      correct: "Excellent! Stoves can be very hot and dangerous. It's smart to stay away.",
      incorrect: "Watch out! A stove can be very hot and burn you. It's not safe to touch."
    }
  },
  {
    id: 4,
    name: 'Book',
    image: bookImg,
    question: 'Is it safe to use this?',
    isSafe: true,
    explanation: {
      correct: "Perfect! Books are safe and wonderful for reading and learning.",
      incorrect: "No need to worry here! Books are safe and fun to read."
    }
  },
  {
    id: 5,
    name: 'Cleaning Supplies',
    image: cleaningImg,
    question: 'Is it safe to play with these?',
    isSafe: false,
    explanation: {
      correct: "That's right! Cleaning supplies have chemicals and are not toys.",
      incorrect: "Be careful! These bottles contain chemicals that are not safe to touch or drink."
    }
  },
  {
    id: 6,
    name: 'Apple',
    image: appleImg,
    question: 'Is it safe to eat this?',
    isSafe: true,
    explanation: {
      correct: "Yes! Apples are a healthy and safe snack. Always wash them first!",
      incorrect: "It's okay! Apples are a safe and healthy snack, just remember to wash them first."
    }
  },
  {
    id: 7,
    name: 'Scissors',
    image: scissorsImg,
    question: 'Are these safe to use by yourself?',
    isSafe: false,
    explanation: {
      correct: "You got it! Big scissors are sharp. Always ask a grown-up to help you.",
      incorrect: "Careful! Scissors can be sharp. It's best to have an adult help you use them safely."
    }
  },
  {
    id: 8,
    name: 'Soccer Ball',
    image: soccerImg,
    question: 'Is this a safe toy to play with?',
    isSafe: true,
    explanation: {
      correct: "Yes! A ball is a great and safe toy for playing outside.",
      incorrect: "This is a safe toy! Balls are fun to play with, especially in a park or yard."
    }
  },
  {
    id: 9,
    name: 'Pills',
    image: pillsImg,
    question: 'Is it safe to eat this if you find it?',
    isSafe: false,
    explanation: {
      correct: "That's very important! Never eat medicine unless a grown-up gives it to you.",
      incorrect: "Stop! Never eat pills you find. Medicine should only come from a trusted adult."
    }
  },
  {
    id: 10,
    name: 'Friendly Dog',
    image: dogImg,
    question: 'Is it safe to pet a dog you don\'t know?',
    isSafe: false,
    explanation: {
      correct: "That's the smart choice! Always ask the owner first before petting a new dog.",
      incorrect: "Hold on! Even if a dog looks friendly, you must always ask the owner before petting it."
    }
  },
  {
    id: 11,
    name: 'Matches',
    image: matchImg,
    question: 'Are these safe to play with?',
    isSafe: false,
    explanation: {
      correct: "Correct! Matches create fire and are very dangerous. They are only for adults.",
      incorrect: "Definitely not! Matches are for grown-ups only. They can start a fire and are not toys."
    }
  },
  {
    id: 12,
    name: 'Bicycle with Helmet',
    image: bicycleImg,
    question: 'Is riding a bike with a helmet safe?',
    isSafe: true,
    explanation: {
      correct: "You bet! Wearing a helmet keeps your head safe while you have fun riding your bike.",
      incorrect: "This is safe! A helmet is super important for keeping you safe while riding a bike."
    }
  }
];

// exporting data for use in components (lists, props)
export default items;
