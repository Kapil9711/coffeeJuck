import Logo from "./navigation/Logo";
import HomeImage from "./navigation/HeroImage";
import Home from "./Home";
import About from "./About";
import { useState } from "react";
import Numbers from "./Numbers";
import Contact from "./Contact";

export default function Navigation() {
  let [title, settitle] = useState("Coffee Junkie");
  const setHeading = (event) => {
    title = event.target.innerText;
    console.log(event.target);
    settitle(title);
  };
  return (
    <div>
      <Logo />
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
      <HomeImage />
      {title === "Home" || title === "Coffee Junkie" ? <Home></Home> : ""}
      {title === "About" ? <About /> : ""}
      {title === "Numbers" ? <Numbers /> : ""}
      {title === "Contacts" ? <Contact /> : ""}
    </div>
  );
}
