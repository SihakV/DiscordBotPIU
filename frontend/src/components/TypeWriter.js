import React, { useState, useEffect } from "react";
import classNames from "classnames";

function Typewriter({ text, backgroundColor, textColor }) {
  const [typewriterText, setTypewriterText] = useState("");
  const delay = 50; // adjust this value for a slower or faster effect

  useEffect(() => {
    let index = 0;
    let intervalId = null;

    const startTyping = () => {
      intervalId = setInterval(() => {
        if (index < text.length) {
          setTypewriterText((prevText) => prevText + text.charAt(index));
          index++;
        } else {
          clearInterval(intervalId);
          setTimeout(clearText, 5000);// pause for 1 second before clearing the text
        }
      }, delay);
    };

    const clearText = () => {
      setTypewriterText(""); // clear the text
      index = 0; // reset the index
      setTimeout(startTyping, 1000); // pause for 1 second before starting the typing again
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
    };
  }, [text, delay]);

  const wrapperClasses = classNames("h-44", backgroundColor, textColor); // Adjust the height value as needed

  return <div className={wrapperClasses}>{typewriterText}</div>;
}

export default Typewriter;
