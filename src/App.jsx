import Header from "./components/Header";
import Content from "./components/Content";
import QUESTIONS from "./questions";
import QuizContextProvider from "./store/quiz-context";

function App() {
  const questions = QUESTIONS;

  return (
    <QuizContextProvider>
      <Content questions={questions} />
    </QuizContextProvider>
  );
}

export default App;
