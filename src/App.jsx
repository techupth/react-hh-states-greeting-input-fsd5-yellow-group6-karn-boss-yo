import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Greeting Message");

  const updateText = () => {
    const newText = document.getElementById("greeting-message").value;
    setText(newText)
  }

  //document.getElentById("").value คือการดึงค่าที่ผู้ใช้ป้อนเข้าใน Element ที่มี ID ที่ระบุ ใน DOM (Document Object Model) ของเว็บไซต์ของคุณ.ณ ที่นี้คือ id-"greeting-message" ของ <input>
  //นามสกุล .value จะถูกใช้เพื่อดึงค่าที่ผู้ใช้ป้อนลงใน input element

  return (
    <div className="App">
      <div className="greeting-container">{text}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" />
      </div>

      <div className="buttons">
        <button onClick={updateText}>Update text</button>
      </div>
    </div>
  );
}

export default App;
