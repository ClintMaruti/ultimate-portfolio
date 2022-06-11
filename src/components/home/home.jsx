import React, { useRef, useState } from "react";
import img from "../props/king1.png";
import Button from "../button/button";
import { BsMouse } from "react-icons/bs";
import "./home.css";

function Home() {
    const [active, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!active);
    };

    return (
        <div id="home" className="container home-container">
            <div className="logo">
                <div className={`hover-show ${active ? "active" : null}`} onClick={toggleClass}>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <img src={img} alt="" />
            </div>

            <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className="scroll" />
                <hr />
            </a>

            <h2>
                <span>About Me</span>
                <br />
                <p>
                    I'm a software engineer with a deep love for problem-solving and bringing ideas to life. I have 6+ years of experience in developing full-stack web applications in a variety of domains and tech stacks. My strongest skills are but are not limited to Node.js, React, Redux,
                    Typescript, GraphQL, Postgres, and MongoDB. I'm adept at working with Agile and Scrum methodologies in distributed teams to accomplish project milestones according to specific timeframes. I have experience in working in startups and fast-moving teams with fixed deadlines. I'm
                    also quick in learning and adapting to new environments and methodologies. At the moment, I'm learning about Machine Learning and looking forward to growing my career in this direction. Hit me up to chat more about me and my skills.
                </p>
            </h2>
            <Button />
        </div>
    );
}

export default Home;
