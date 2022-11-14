import "./Advice.css";
import ProgAdvice from "../../assets/images/ProgAdvice.png";

const Advice = ({ advice, author, fetchA }) => {
  return (
    <div className="advice-container">
      <img className="progAdviceImg" src={ProgAdvice} alt="logo" />
      {author && (
        <div className="theAdvice">
          <h2>
            <i>{advice}</i>
          </h2>
          <h1>{author}</h1>
        </div>
      )}
      <button className="adviceBtn" onClick={fetchA}>
        {author === undefined ? "Show Advice" : "Another One"}
      </button>
    </div>
  );
};

export default Advice;
