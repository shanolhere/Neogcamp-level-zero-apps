import React, { useState } from "react";
import "./styles.css";
import Navbar from "./navbar";
import Footer from "./footer";

const data = {
  "🙂": "Slightly Smiling Face",
  "😂": "Face with Tears of Joy",
  "🙃": "Upside Down Face",
  "😉": "Winking",
  "😊": "Smiling",
  "🤩": "Star-Struck",
  "😘": "Blowing a Kiss",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging",
  "🤫": "Shushing",
  "🤔": "Thinking",
  "🤨": "Raising eyebrow",
  "😑": "Expressionless",
  "😏": "Smiriking",
  "😒": "Unamused",
  "🙄": "Rolling eyes",
  "😪": "Sleepy",
  "🤤": "Drooling",
  "😴": "Sleeping",
  "🤢": "Nauseated",
  "🤮": "Vomiting",
  "🤧": "Sneezing",
  "😕": "Confused",
  "😟": "Worried",
  "😲": "Astonished",
  "😨": "Fearful",
  "😭": "Loudly Crying",
  "😠": "Angry",
  "🥱": "Yawning",
  "👿": "Angry Face with Horns",
  "👻": "Ghost",
  "👾": "Alien Monster",
  "🤖": "Robot",
  "😺": "Grinning Cat",
  "😾": "Pouting Cat",
  "💋": "Kiss Mark",
  "👋": "Waving Hand",
  "👌": "OK",
  "✌️": "Victory",
  "🤞": "Crossed Fingers",
  "🤙": "Call Me",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "🤲": "Palms Together",
  "🤳": "Selfie",
  "✍️": "Writing"
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
