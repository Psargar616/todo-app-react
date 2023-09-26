import React from "react";
import "./Home.css";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";
import Input from "../components/Input"
import List from "../components/List";
import lightBg from "../images/bg-desktop-light.jpg";
import darkBg from "../images/bg-desktop-dark.jpg";


const Home = () => {
  const handleIcon = () => {
    let moon = document.querySelector("#moon");
    let sun = document.querySelector("#sun");
    let theme = document.querySelector(".main-container");
    let lightBg = document.querySelector("#light-bg");
    let darkBg = document.querySelector("#dark-bg");

    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
    theme.classList.toggle("dark");
    lightBg.classList.toggle("hidden");
    darkBg.classList.toggle("hidden");
  };
  return (
    <section className="homepage-container">
      <img
        className="homepage-image"
        id="light-bg"
        src={lightBg}
        alt="home image light"
      />
      <img
        className="homepage-image hidden"
        id="dark-bg"
        src={darkBg}
        alt="home image dark"
      />

      <div className="todocontainer">
        <div className="todo_wrapper">
          <h1 className="title">todo</h1>
          <div className="theme_icon">
            <Moon id="moon" onClick={() => handleIcon()} />
            <Sun id="sun" className="hidden" onClick={() => handleIcon()} />
          </div>
        </div>

        <Input />
        <List />
      </div>
    </section>
  );
};

export default Home;
