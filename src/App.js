import { useState } from "react";
import "./App.css";
import Advice from "./components/advice/Advice";

function App() {
  const [advice, setAdvice] = useState({});

  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     fetchAdvice();
  //   }, 3000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  const fetchAdvice = () => {
    try {
      fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then((res) => res.json())
        .then((data) => setAdvice(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Advice
        advice={advice.quote}
        author={advice.author}
        fetchA={fetchAdvice}
      />
    </div>
  );
}

export default App;
