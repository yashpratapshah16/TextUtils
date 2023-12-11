import React from "react";

export default function About(props) {
  return (
    <div
      className={`flex flex-col items-center mx-3 ${
        props.mode === "dark" && "text-white"
      }`}
    >
      <h1 className=" my-5">About</h1>
      <div className="about">
        <p>This page is made for presonal test or learning.</p>
        <p>About the page functionality are:</p>
        <p>
          There is Textbox in which you write some text and manipulate it by
          using the given buttons.
        </p>
        <p>CLEARTEXT-to clear the entire text</p>
        <p>UPPERCASE-to covert the each letter to Uppercase/Capital.</p>
        <p>LOWERCASE-to covert the each letter to lowercase.</p>
        <p>TITLECASE-to covert the each word's first letter to Uppercase.</p>
        <p>COPYTEXT-to copy the entire text.</p>
        <p>ALTERNATE-to covert the text in Lowercase,Uppercase format.</p>
        <p>REMOVESPCAE-to Remove the extra space in text</p>
        <p>REVERSETEXT-to Reverse the entire text</p>
        <p>
          It is also show the Number Characters,Words,Vowels,Consonants in Text
        </p>
        <p>how Minutes it takes to read the enitre Text</p>
        <p>The Preview of the Text</p>
      </div>
    </div>
  );
}
