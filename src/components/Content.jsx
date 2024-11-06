import { useContext } from "react";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import { QuizContext } from "../store/quiz-context";
import Header from "./Header";

export default function Content({ questions }) {
  const { isFinished, userAnswers } = useContext(QuizContext);
  return (
    <>
      {!isFinished && <Header />}
      <div id="content">
        {isFinished ? (
          <ScoreBoard questions={questions} userAnswers={userAnswers} />
        ) : (
          <Question questions={questions} />
        )}
      </div>
    </>
  );
}
