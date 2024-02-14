import { useState } from "react";
export default function Navigation() {
  let [title, settitle] = useState("Coffee Junkie");
  const setHeading = (event) => {
    title = event.target.innerText;
    console.log(event.target);
    settitle(title);
  };
  return (
    <div>
      <h2 id="navigation">{title === "Home" ? "Coffee Junkie" : title}</h2>
      <ul>
        <li>
          <a onClick={setHeading} href="#Home">
            Home
          </a>
        </li>
        <li>
          <a onClick={setHeading} href="#About">
            About
          </a>
        </li>
        <li>
          <a onClick={setHeading} href="#Numbers">
            Numbers
          </a>
        </li>
        <li>
          <a onClick={setHeading} href="#Contacts">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
}
