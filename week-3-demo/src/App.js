import "./App.css";
import joebruin from "./assets/joebruin.jpg";
import bball from "./assets/bball.jpg";
import hack from "./assets/hack.jpg";
import bear from "./assets/bear.jpg";
import React from 'react';
import Garden from "./components/Garden";


function App() {
  return (
    <div id="content">
      <div id="navigation">
        <h1>Joe Bruin</h1>
      </div>
      <div id="intro">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img width="200px" src={joebruin} alt="logo" />{" "}
        </div>
        <p style={{ fontSize: "25px" }}>
          Hi! My name is Joe Bruin and I am 38th year at UCLA.{" "}
          <b>
            More importantly, I'm a member of the greatest club,{" "}
            <a href="https://hack.uclaacm.com/">ACM Hack.</a>
          </b>{" "}
          I love Yoga, foreign films, and combat sports.
          <br />
          <u>
            One thing you should know about me is that I am extremely passionate
            about HTML.
          </u>
        </p>
      </div>

      <div className="section">
        <h2>Fun Facts about Me</h2>
        <ul>
          <li>I'm 72 years old</li>
          <li>I never graduated high school</li>
          <li>I can't dunk</li>
        </ul>
      </div>

      <div className="section">
        <h2>My favorite foods ranked</h2>
        <ol>
          <li>rissoto</li>
          <li>tonkatsu</li>
          <li>de neve chicken</li>
          <li>chocolate lava cake</li>
        </ol>
      </div>

      <div className="section">
        <h2>My Camera Roll</h2>
        <div id="flexbox">
          <div className="cameraEntry">
            <div>
              <h5>Another UCLA Victory</h5>
              <img src={bball} />
            </div>

            <p> UCLA wins another hard fought battle. Go Bruins!</p>
          </div>

          <div className="cameraEntry">
            <div>
              <h5>Bear Statue</h5>
              <img src={bear} />
            </div>
            <p>
              One of my favorite parts of campus. Love being greated by another
              bear on my way up bruin walk.
            </p>
          </div>

          <div className="cameraEntry">
            <div>
              <h5>The best UCLA club</h5>
              <img src={hack} />
            </div>
            <p>
              Here's everyone at HOTH 9. Hope everyone is looking forward to
              HOTH 10 this year!
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <Garden owner="Joe Bruin" />
      </div>

    </div>
  );
}

export default App;
