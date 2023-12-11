import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const handleTextCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const onAlternatingCase = () => {
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
  };

  const handleSome = () => {
    let res = text.split(/[ ]+/);
    setText(res.join(" "));
  };

  const handleReverse = (str) => {
    if (!str || str.length < 2 || typeof str !== "string") {
      return "Not valid";
    }

    const revArray = [];
    const length = str.length - 1;

    for (let i = length; i >= 0; i--) {
      revArray.push(str[i]);
    }

    // Joining the array elements
    setText(revArray.join(""));
  };

  const vowels = ["a", "e", "i", "o", "u"];

  function countVowel(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
    }
    return count;
  }

  return (
    <div
      className={`Main sm:w-3/5 mx-auto flex flex-col ${
        props.mode === "dark" && "text-white"
      }`}
    >
      <h1 className=" text-2xl my-2">Enter The Text To Analyze Below</h1>
      <textarea
        onChange={(e) => setText(e.target.value)}
        className={` my-2 p-3 border-solid border border-${props.mode==="light"?'black':'white bg-black'} resize-none `}
        value={text}
        rows="4"
        id="textBox"
      ></textarea>
      <div>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={() => {
            setText("");
          }}
        >
          ClearText
        </Button>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={() => {
            setText(text.toUpperCase());
          }}
        >
          UpperCase
        </Button>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={() => {
            setText(text.toLowerCase());
          }}
        >
          LowerCase
        </Button>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={() => {
            setText(titleCase(text));
          }}
        >
          TitleCase
        </Button>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={handleTextCopy}
        >
          CopyText
        </Button>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={onAlternatingCase}
        >
          AlternateCase
        </Button>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={handleSome}
        >
          RemoveSpace
        </Button>
        <Button
          color={`${props.mode === "dark" && "white"}`}
          className=" w-fit m-2"
          onClick={() => handleReverse(text)}
        >
          ReverseText
        </Button>
      </div>
      <h2>In Your Sentence there is</h2>
      <p>
        {
          text
            .replace(/\n/g, " ")
            .split(" ")
            .filter((value) => value !== "").length
        }{" "}
        Words and {text.trim().length} Characters
      </p>
      <p>
        {countVowel(text)} Vowels and {text.trim().length - countVowel(text)}{" "}
        Consonants
      </p>
      <p>
        {0.008 *
          text
            .replace(/\n/g, " ")
            .split(" ")
            .filter((value) => value !== "").length}{" "}
        Minutes To Read
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text above to Preview it Here!!"}</p>
    </div>
  );
};

export default Textform;
