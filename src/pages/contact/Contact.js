import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-content container">
                <div className="contact-wrapper">
                    {/* <div className="contact-item facebook">
                        <a href="https://www.facebook.com/profile.php?id=100079468666534" className="fab fa-facebook-f"></a>
                    </div>

                    <div className="contact-item instagram">
                        <a href="https://www.instagram.com/lamnhuthoa" className="fab fa-instagram"></a>
                    </div> */}

                    <div className="contact-item behance">
                        <a href="https://www.behance.net/hoalam2" className="fab fa-behance"></a>
                    </div>

                    <div className="contact-item dribbble">
                        <a href="https://dribbble.com/lamnhuthoa85" className="fab fa-dribbble"></a>
                    </div>

                    <div className="contact-item linkedin">
                        <a href="https://www.linkedin.com/in/lamnhuthoa/" className="fab fa-linkedin-in"></a>
                    </div>

                    <div className="contact-item github">
                        <a href="https://github.com/lamnhuthoa" className="fab fa-github"></a>
                    </div>

                    {/* <div className="contact-item youtube">
                        <a href="https://www.youtube.com/channel/UCukW1Um0W4I_xgJH-UIRC9w" className="fab fa-youtube"></a>
                    </div>

                    <div className="contact-item soundcloud">
                        <a href="https://soundcloud.com/lamnhuthoa" className="fab fa-soundcloud"></a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
