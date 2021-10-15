import './App.css';

import QuestionPresenter from './components/question-presenter/QuestionPresenter';
import React from 'react';

function App() {
  return (
    <div className="App">
      <QuestionPresenter
        question={"What are the ideal conditions inside an office?"}
        answerOptions={[{
          id: "answer1",
          correctAnswerId: "option1",
          options:[{
            value: "Good Pay",
            id: "option1"
          }, {
            value:  "Bad Pay",
            id: "option2"
          }]
        }, {
          id: "answer2",
          correctAnswerId: "option2",
          options:[{
            value: "Lot of meetings",
            id: "option1"
          }, {
            value:  "Less meetings",
            id: "option2"
          }]
        }, {
          id: "answer3",
          correctAnswerId: "option2",
          options:[{
            value: "Free coffee",
            id: "option1"
          }, {
            value:  "Expensive coffee",
            id: "option2"
          }]
        }, {
          id: "answer4",
          correctAnswerId: "option1",
          options:[{
            value: "Bear in office",
            id: "option1"
          }, {
            value:  "Dog in office",
            id: "option2"
          }]
        }]}
      />
    </div>
  );
}

export default App;
