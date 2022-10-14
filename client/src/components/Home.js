import React from 'react'
import "./Main.css";
import Service from "./Service";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="home-container">
          <h1>Patrick Studio</h1>
          <h2>Welcome to my Studio App</h2>
        </div>
      </section>
      <Service />
      <Footer />
    </div>
  );
}

export default Home