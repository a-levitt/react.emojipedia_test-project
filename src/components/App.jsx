import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js"

function fillDictionary(emojiTerm) {
  return (
      <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.description}
  />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(fillDictionary)}
      </dl>

    </div>
  );
}

export default App;
