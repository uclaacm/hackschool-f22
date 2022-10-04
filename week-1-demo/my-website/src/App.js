
import './App.css';
import joebruin from "./joebruin.jpg"
import bball from "./bball.jpg"
import hack from "./hack.jpg"
import bear from "./bear.jpg"


function App() {
  return (
    <div>
      <h1>
        Joe Bruin
      </h1>
        <img width = "200px" src={joebruin} alt="logo" />
        <p>
        Hi! My name is Joe Bruin and I am 37th year at UCLA. <b>More importantly, I'm a member
        of the greatest club, <a href="https://hack.uclaacm.com/">ACM Hack.</a></b> I love Yoga, foreign films, and combat sports.<br/>
        <u>One thing you should know about me is that I am extremely passionate about HTML.</u>
        </p>

        <h2>Fun Facts about Me</h2>
        <ul>
          <li>I'm 72 years old</li>
          <li>I never graduated high school</li>
          <li>I can't dunk</li>
        </ul>

        <h2>My favorite foods ranked</h2>
        <ol>
          <li>de neve chicken</li>
          <li>burritos</li>
          <li>chocolate lava cake</li>
        </ol>
  
        <h2>My Camera Roll</h2>

        <div>
          <img src = {bball}/>
          <h5>Another UCLA Victory</h5>
          <p> UCLA wins another hard fought battle. Go Bruins!</p>
        </div>

        <div>
          <img src = {bear}/>
          <h5>Bear Statue</h5>
          <p>One of my favorite parts of campus. Love being greated by another bear on my way up bruin walk.</p>
        </div>

        <div>
          <img src = {hack}/>
          <h5>The best UCLA club</h5>
          <p>Here's everyone at HOTH 9. Hope everyone is looking forward to HOTH 10 this year!</p>
        </div>

        
      
    </div>

    
  );
}

export default App;
