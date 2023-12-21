import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Okay, I'm ready!");
  const [newGreetingMessage, setNewGreetingMessage] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setNewGreetingMessage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage(newGreetingMessage);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
