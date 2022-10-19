import React from "react";
import bball from "../assets/bball.jpg";
import hack from "../assets/hack.jpg";
import bear from "../assets/bear.jpg";

function AboutMe() {
    return (
        <>
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
        </>
    )
}

export default AboutMe