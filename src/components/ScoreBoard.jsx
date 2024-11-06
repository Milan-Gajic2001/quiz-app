export default function ScoreBoard({ questions, userAnswers }) {
  return (
    <div className="scoreboard">
      <ul>
        {questions.map((question, i) => {
          if (userAnswers[i].answer === question.correct) {
            return (
              <li className="SB-answer" key={question}>
                <h2>
                  {i + 1}.{question.text}
                </h2>
                <p className="correct">{userAnswers[i].answer}</p>
              </li>
            );
          } else {
            return (
              <li className="SB-answer" key={question}>
                <h2>
                  {i + 1}.{question.text}
                </h2>
                <p className="incorrect">{userAnswers[i].answer}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
