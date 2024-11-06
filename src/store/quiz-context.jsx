import { createContext, useState } from "react";

export const QuizContext = createContext({
  userAnswers: "",
  handleAnswerClick: "",
  currentQuestionIndex: "",
  setCurrentQuestionIndex: "",
  isFinished: "",
});

export default function QuizContextProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerClick(answer, questionID) {
    setUserAnswers((prevAnswers) => {
      const updatedArray = [...prevAnswers, { questionID, answer }];
      return updatedArray;
    });
    setCurrentQuestionIndex((prevQuestionIndex) => {
      if (prevQuestionIndex === 6) {
        setIsFinished(true);
      } else {
        return prevQuestionIndex + 1;
      }
    });
  }

  const quizCtx = {
    userAnswers,
    handleAnswerClick,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    isFinished,
  };

  return (
    <QuizContext.Provider value={quizCtx}>{children}</QuizContext.Provider>
  );
}
