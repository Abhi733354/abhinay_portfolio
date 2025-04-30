import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.jpg';
import mock11 from '../assets/images/ecommerce.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://abq-ecomerce.netlify.app/" target="_blank" rel="noreferrer"><img src="https://cdn.prod.website-files.com/637610b6e8be873142dadb34/63e2314b1c9e7221cb01f8c8_8-Steps-to-Optimize-Your-Ecommerce-Shopping-Cart-Checkout-in-2020.png" className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://abq-ecomerce.netlify.app/" target="_blank" rel="noreferrer"><h2>E-Commerce</h2></a>
                <p>Designed, developed, ecommerce website app with search and filter functionality using React Js and Context API. </p>
            </div>
        </div>
    </div>
    );
}

export default Project;