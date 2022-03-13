import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="about-container" id="about">
            <div className="about-content container">
                <div className="normal-screen">
                    <div><p className="text-center about-title">Hòa</p></div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="w-50 pe-2"><p className="text-end about-text">a part-time front-end developer</p></div>
                        <div className="w-50 ps-2"><p className="text-start about-text">works at BOSCH</p></div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="w-50 pe-2"><p className="text-end about-text">lives in Vietnam</p></div>
                        <div className="w-50 ps-2"><p className="text-start about-text">was born in 1999</p></div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="w-50 pe-2"><p className="text-end about-text">studied at UEH University</p></div>
                        <div className="w-50 ps-2"><p className="text-start about-text">speaks English, Vietnamese</p></div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="w-50 pe-2"><p className="text-end about-text">loves traveling around</p></div>
                        <div className="w-50 ps-2"><p className="text-start about-text">enjoys playing the instruments</p></div>
                    </div>
                </div>

                <div className="responsive d-flex flex-column align-items-center">
                    <div><p className="text-center about-title">Hòa</p></div>
                    <ul className="d-flex flex-column justify-content-center">
                        <li>A part-time front-end developer</li>
                        <li>Works at BOSCH</li>
                        <li>Lives in Vietnam</li>
                        <li>Was born in 1999</li>
                        <li>Studied at UEH University</li>
                        <li>Speaks English, Vietnamese</li>
                        <li>Loves traveling around</li>
                        <li>Enjoys playing the instruments</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
