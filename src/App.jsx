import "./App.css";
import { useState } from "react";

function App() {
  const [valueString, setValueString] = useState('Greeting Message')

  const changeStringNew = () => {
    const newGreetingMessage = document.getElementById('greeting-message').value;
    setValueString(newGreetingMessage);
  }

  return (
    <div className="App">
      <div className="greeting-container">{valueString}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" />
      </div>

      <div className="buttons">
        <button onClick={changeStringNew}>Update text</button>
      </div>
    </div>
  );
}

export default App;
