import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const defaultQuestions = questions.filter((question) => {
      return question.category.includes('JavaScript');
    })
    setFlashcards(defaultQuestions);
  }, []);

  function handleChange(event) {
    const selectedQuestions = questions.filter((question) => {
      return question.category.includes(event.target.value);
    });

    setFlashcards(selectedQuestions);
  }

  return (
    <>
      <form className="header">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" onChange={handleChange}>
            {categoriesList.map((category) => {
              return (
                <option key={category.value} value={category.value}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      {flashcards && (
        <div className="container">
          <FlashcardList flashcards={flashcards} />
        </div>
      )}
    </>
  );
}

const categoriesList = ['JavaScript', 'HelloWorld', 'xxx'];

const questions = [
  {
    id: 1,
    category: 'JavaScript',
    question: 'short text',
    answer: 'What is functional programming? What is functional programming? What is functional programming? v What is functional programming? What is functional programming? What is functional programming? v What is functional programming? What is functional programming? What is functional programming? v   functional programming? What is functional programming? What is functional programming? v What is functional programming? What is functional programming? What is functional programming? v What is functional programming? What is functional programming? What is functional programming? v ',
  },
  {
  id: 2,
  category: 'JavaScript',
  question: 'Wha is functional programming? What is functional programming? v What is functional programming? What is functional programming? What is functional programming? v   functional programming? What is functional programming? What is functional programming? v What is functional programming? What is functional programming? What is functional programming? v What is functional programming? What is functional programming? What is functional programming? v ',
  answer: 'Short text',
},
{
  id: 3,
  category: 'JavaScript',
  question: 'What is v ',
  answer: 'Short text',
},
  {
    id: 4,
    category: 'HelloWorld',
    question: 'Why Hello World?',
    answer: 'Short text',
  },
];

// const HelloWorld = [
//   {
//     id: 3,
//     question: "What is Hello World?",
//     answer:
//       "z",
//   },
//   {
//     id: 4,
//     question: "Hello Hello are some advantages World?",
//     answer:
//       "YOAOS",
//   },
// ];

export default App;
