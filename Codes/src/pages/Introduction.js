import React from 'react';
import portrait from '../images/portrait.png';
import interest from '../images/interest.png';

const Introduction = () =>
{
    return(
        <section id="intro-section" className="container">
            <div className="intro-words">
                <h1>Front-End Developer</h1>
                <h2>Hello, I am <span class="txt_dark-purple">Delfhin Goh</span></h2>
            </div>
            <figure className="intro-img-portrait">
                <img src={ portrait } alt="Portrait cartoon drawing"/>
            </figure>
            <figure className="intro-img-interest">
                <img src={ interest } alt="Cartoon drawing of various items, each representing an interest"/>
            </figure>
        </section>
    );
}

export default Introduction;