import React, { useState } from "react";
import "./styles.css";
import Navbar from "./navbar";
import Footer from "./footer";

const data = {
  "๐": "Slightly Smiling Face",
  "๐": "Face with Tears of Joy",
  "๐": "Upside Down Face",
  "๐": "Winking",
  "๐": "Smiling",
  "๐คฉ": "Star-Struck",
  "๐": "Blowing a Kiss",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging",
  "๐คซ": "Shushing",
  "๐ค": "Thinking",
  "๐คจ": "Raising eyebrow",
  "๐": "Expressionless",
  "๐": "Smiriking",
  "๐": "Unamused",
  "๐": "Rolling eyes",
  "๐ช": "Sleepy",
  "๐คค": "Drooling",
  "๐ด": "Sleeping",
  "๐คข": "Nauseated",
  "๐คฎ": "Vomiting",
  "๐คง": "Sneezing",
  "๐": "Confused",
  "๐": "Worried",
  "๐ฒ": "Astonished",
  "๐จ": "Fearful",
  "๐ญ": "Loudly Crying",
  "๐ ": "Angry",
  "๐ฅฑ": "Yawning",
  "๐ฟ": "Angry Face with Horns",
  "๐ป": "Ghost",
  "๐พ": "Alien Monster",
  "๐ค": "Robot",
  "๐บ": "Grinning Cat",
  "๐พ": "Pouting Cat",
  "๐": "Kiss Mark",
  "๐": "Waving Hand",
  "๐": "OK",
  "โ๏ธ": "Victory",
  "๐ค": "Crossed Fingers",
  "๐ค": "Call Me",
  "๐": "Thumbs Up",
  "๐": "Thumbs Down",
  "โ": "Raised Fist",
  "๐ค": "Handshake",
  "๐": "Folded Hands",
  "๐คฒ": "Palms Together",
  "๐คณ": "Selfie",
  "โ๏ธ": "Writing"
};

var emojiKeys = Object.keys(data);
//console.log(emojiKeys);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiHandler = (emoji) => {
    setMeaning(data[emoji]);
  };

  const inputHandler = (event) => {
    //console.log(event.target.value);
    const emojiEntered = event.target.value;
    if (emojiEntered === undefined || data[emojiEntered] === undefined) {
      setMeaning("Sorry! We don't have this in our database");
    } else {
      setMeaning(data[emojiEntered]);
    }
  };

  return (
    <div className="App">
      <Navbar />

      <main>
        <h4>Welcome</h4>
        <input
          type="text"
          placeholder="Enter an emoji..."
          onChange={inputHandler}
          className="input"
        />
        <p className="result">{meaning}</p>

        <p>Emojis we know</p>
        <div className="emoji-container">
          {emojiKeys.map((emoji) => {
            return (
              <span key={emoji} onClick={() => emojiHandler(emoji)}>
                {emoji}
              </span>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
