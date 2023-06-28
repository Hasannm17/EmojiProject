import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";


function CreateEntry(emojieTrim){

   
  return ( <Term
  key={emojieTrim.id}
  emoji={emojieTrim.emoji}
  name={emojieTrim.name}
  meaning={emojieTrim.meaning}
  />

  )
}





function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
   {emojipedia.map(CreateEntry)}


      </dl>
    </div>
  );
}

export default App;
