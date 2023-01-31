import React from 'react';
import GitHubIcon from '../images/github-icon.png';
import LinkedInIcon from '../images/linked-icon.png';

const Footer = () => 
{
    const githubLink = "https://github.com/delfhingoh";
    const linkedInLink = "https://www.linkedin.com/in/delfhingoh/";

    return(
        <>
            <footer>
                <div className="footer container">
                    <p>DELFHIN &copy; 2023</p>
                    <div className="social-media-links">
                        <a href={ githubLink } target="_blank" rel="noreferrer">
                            <img src={ GitHubIcon } alt="GitHub icon"/>
                        </a>
                        <a href={ linkedInLink } target="_blank" rel="noreferrer">
                            <img src={ LinkedInIcon } alt="LinkedIn icon"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;