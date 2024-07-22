import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import MemeList from "./components/Memes/MemeList.jsx";
import Tokenomics from "./components/Tokenomics/Tokenomics.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Roadmap from "./components/Roadmap/Roadmap.jsx";
import useScript from "./useScript.js";

function App({ url }) {
  useScript(url);
  return (
    <div className="main">
      <img
        src="https://uglisolana.com/images/background.png"
        className="imgBackground"
      />
      <canvas id="canvas" />
      <div className="ugliObjectsWrapper">
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
        <img
          src="https://uglisolana.com/images/logo.png"
          alt=""
          className="ugliObjectImg"
        />
      </div>
      <div className="content">
        <div className="backgroundWrapper">
          <Navbar />
          <Home />
          <About />
          <MemeList />
          <Tokenomics />
          <Roadmap />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
