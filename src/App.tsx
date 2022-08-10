import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Story from "./components/Story/Story";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Layout>
        <About />
        <Features />
        <Tours />
        <Story />
        <Booking />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
