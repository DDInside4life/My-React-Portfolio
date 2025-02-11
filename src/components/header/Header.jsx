// import Particles from "react-particles-js";
// import particlesConfig from "./../../assets/particles.json"

import "./style.css";

// import { useEffect } from "react";

const Header = () => {
  // useEffect(() => {
  //   const handleClick = () => {
  //     // Используем window.particlesJS
  //     window.particlesJS.load("particles-js", "/assets/particles.json", () => {
  //       console.log("callback - particles.js config loaded");

  //       // Используем window.pJSDom для доступа к внутреннему объекту
  //       if (window.pJSDom && window.pJSDom.length > 0) {
  //         window.pJSDom[0].pJS.interactivity.el =
  //           document.getElementById("particles-js");
  //         console.log("Interactivity element set to #particles-js");
  //       }
  //     });
  //   };

  //   const triggerButton = document.getElementById("trigger-button");
  //   if (triggerButton) {
  //     triggerButton.addEventListener("click", handleClick);
  //   }

  //   return () => {
  //     if (triggerButton) {
  //       triggerButton.removeEventListener("click", handleClick);
  //     }
  //   };
  // }, []);

  function changeId() {
    // Находим элемент по текущему id
    const element = document.getElementById("particles-js");
    const nameElement = document.getElementById("name");

    // Меняем его id на новый
    element.id = "particles-js-2";
    nameElement;
  }

  const handleClick = () => {
    // Инициализация particles.js
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/assets/particles.json", () => {
        console.log("callback - particles.js config loaded");
        changeId();
      });
    } else {
      console.error("particlesJS is not loaded!");
    }
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__tittle">
          <strong>
            Hi, my name is <em onClick={handleClick}>Roman</em>
          </strong>
          <br />I am a web-developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
      </div>
      <div id="particles-js"></div>
    </header>
  );
};

export default Header;
