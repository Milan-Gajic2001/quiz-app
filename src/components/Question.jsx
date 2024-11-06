import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../store/quiz-context";

function shuffle(originalArray) {
  var array = [].concat(originalArray);
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export default function Question({ questions }) {
  const { handleAnswerClick, currentQuestionIndex } = useContext(QuizContext);
  const currectQuestion = questions[currentQuestionIndex];
  const { text, answers, id } = currectQuestion;
  const shuffledAnswers = shuffle(answers);
  return (
    <>
      <h3 className="question">{text}</h3>
      <ul className="answers">
        {shuffledAnswers.map((answer) => (
          <Answer key={answer} onClick={() => handleAnswerClick(answer, id)}>
            {answer}
          </Answer>
        ))}
      </ul>
    </>
  );
}
