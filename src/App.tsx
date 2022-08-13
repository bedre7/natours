import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Story from "./components/Story/Story";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    console.log(showPopup);
  };

  return (
    <div className="App">
      <Layout>
        <About />
        <Features />
        <Tours />
        <Story />
        <Booking onClose={closePopup} />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
