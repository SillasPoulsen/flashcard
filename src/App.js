import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";

function App() {
  const [flashcards, setFlashcards] = useState(JavaScript);
  const [categories, setCategories] = useState(["JavaScript", "HelloWorld"]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleChange(event) {
    console.log(event.target.value);
    setFlashcards({ selectValue: event.target.value });
  }

  useEffect(() => {}, [handleChange]);

  return (
    <>
      <form className="header">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" onChange={handleChange}>
            {categories.map((category) => {
              return (
                <option key={category.value} value={category.value}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

const JavaScript = [
  {
    id: 1,
    question: "What is functional programming?",
    answer:
      "Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values. In functional programming, we think and code in terms of functions.",
  },
  {
    id: 2,
    question: "What are some advantages of functional programming?",
    answer:
      "FP is based around the concept of pure functions, which avoid shared state, mutable data and side-effects.",
  },
];

const HelloWorld = [
  {
    id: 3,
    question: "What is Hello World?",
    answer:
      "Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values. In functional programming, we think and code in terms of functions.",
  },
  {
    id: 4,
    question: "Hello Hello are some advantages World?",
    answer:
      "FP is based around the concept of pure functions, which avoid shared state, mutable data and side-effects.",
  },
];

export default App;
