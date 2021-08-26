import React from 'react';
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm
                    <span> I Dewa Putu Surya Eko Bumi.</span>
                </h1>
                <p className="h-sub-text">
                   I am a bachelor degree graduate from Institut Teknologi bandung who has a high passion in the field of website development, especially in the FrontEnd section.

                </p>

                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
