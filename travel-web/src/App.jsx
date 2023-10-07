import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="destination">
          <Destination/>
        </div>
      </main>
    </div>
  );
};

export default App;
