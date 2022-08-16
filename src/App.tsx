import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Story from "./components/Story/Story";
import Footer from "./components/Footer/Footer";
import Popup from "./components/PopUp/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(previous => !previous);
  };

  return (
    <div className="App">
      {showPopup && <Popup onClose={togglePopup} />}
      <Layout>
        <About />
          <Features />
          <About />
          <Tours onClick={togglePopup}/>
          <Story />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
