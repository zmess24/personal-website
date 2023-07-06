import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({ socialMedia }) => {
    return (
        <nav className="navbar" role="navigation" aria-label="tertiary">
            <header className="navbar-menu">
                <section className="navbar-item" id="footer">
                    <a href={socialMedia.linkedIn} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']}/>
                    </a>
                    <a href={socialMedia.github} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
                    </a>      
                </section>
            </header> 
        </nav>
    )
};

export default Footer;