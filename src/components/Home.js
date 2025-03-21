import React from "react";

function Home() {
  return (
    <section className="home">
      <div className="home-img">
        <img src="public/assets/FORMALPIC.jpg" alt="Veejay" />
      </div>
      <div className="home-content">
        <h1>
          Hello, it's me! <span>Veejay</span>
        </h1>
        <h3 className="typing-text">
          I'm a <span>BSIT 3rd year</span>
        </h3>
      </div>
    </section>
  );
}

export default Home;
