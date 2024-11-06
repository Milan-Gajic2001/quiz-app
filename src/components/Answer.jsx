export default function Answer({ children, onClick }) {
  return (
    <li className="answer">
      <button onClick={onClick} className="btn-answer">
        {children}
      </button>
    </li>
  );
}
