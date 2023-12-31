import React from "react";
import { About, Header, Footer, Skills, Works } from "./container";
import { Navbar } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
