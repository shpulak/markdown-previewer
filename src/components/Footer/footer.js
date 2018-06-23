import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
    return (
        <footer className="footer">
            <span>Created with <FontAwesomeIcon icon={faHeart} /> by Shashwat</span>
            <div className="footer-links">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/shpulak"><FontAwesomeIcon icon={faGithub}/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shpulak/"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/shashwat.pulak"><FontAwesomeIcon icon={faFacebook}/></a>
            </div>
        </footer>
    );
};

export default footer;