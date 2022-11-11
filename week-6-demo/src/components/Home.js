import { React, useState} from 'react';
import joebruin from "../assets/joebruin.jpg";
import meandgordon from "../assets/meandgordon.png";

function Home() {
    const [expanded, setExpanded] = useState(false);
    const [buttonText, setButtonText] = useState("Top secret fact");

    function handleClick() {
        setExpanded(!expanded);
        if (buttonText === "Top secret fact") {
            setButtonText("Hide extra information");
        } else {
            setButtonText("Top secret fact");
        }
    }

    return (
        <>
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
                <button
                    className="button"
                    type="button"
                    onClick={() => handleClick()}
                >
                    {buttonText}
                </button>
                {expanded &&
                    <div>
                        <p style={{fontSize: "20px"}}>
                            Oh... and I've also met Gordon Ramsay 👀🍳 You could become a chef like him at Hack Kitchen....
                        </p>
                        <img width="500px" src={meandgordon} alt="A picture of Joe Bruin and Gordon Ramsay" />
                    </div>
                }
            </div>
        </>
    )
}

export default Home;
