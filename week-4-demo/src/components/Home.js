import React from 'react';
import joebruin from "../assets/joebruin.jpg";

function Home() {
    return (
        <>
            <div id="intro">
                <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img width="200px" src={joebruin} alt="logo" />{" "}
                </div>
                <p>
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
        </>
    )
}

export default Home;