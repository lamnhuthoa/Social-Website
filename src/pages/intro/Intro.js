import React, { Fragment } from 'react';
import Typewriter from "typewriter-effect";
import './Intro.css'

export default function Intro() {

    return (
        <div className="intro-container">
            <div className="typing-greetings-container container">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi! It's Hòa")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcome to my website.")
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        loop: true,
                    }}
                />
            </div>
        </div>
    )
}

