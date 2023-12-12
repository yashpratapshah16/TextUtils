import React from "react";
const year = new Date().getFullYear();

export default function Footer(props) {
  return (
    <footer
      className={`mt-auto mb-10 w-full text-center ${
        props.mode && "text-white"
      }`}
    >
      <p>copyright &copy;{year}</p>
    </footer>
  );
}
