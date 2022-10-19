import React from "react";
import '../App.css';

export default function Portfolio() {

    function getTitle(text) {
        const output = []
        for (let i = 0; i < text.length; i++) {
            output.push(
                <span className="h2" key={`${text}${i}`}>{text[i]}</span>
            )
        }

        return output
    }

    return(
        <div className="portfolio">
            <div className="width">
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2&#62;</h6>
                <div className="portfolio-description">
                    {getTitle('Portfolio')}
                </div>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/h2&#62;</h6>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;</h6>
                <div className="portfolio-description">
                    <p>These are some of the projects I have completed. Please click on the links below to learn more.</p>
                </div>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/p&#62;</h6>
            </div>
            <div className="portfolio-projectcont">
                <div className="portfolio-project" style={{backgroundImage: 'url(./roadruler.jpg)'}} >
                    <div>
                        <a href='https://github.com/Doro-Chau/RoadRuler' target='_blank'>View Project</a>
                        <h3>Road Ruler</h3>
                    </div>
                </div>
                <div className="portfolio-project" style={{backgroundImage: 'url(./DAC.jpeg)'}}>
                    <div>
                        <a href='https://medium.com/@dorothychau1316/ntu-dac-custermer-retention-study-for-shared-parking-space-provider-a6e08eea012b' target='_blank'>View Project</a>
                        <h3>DAC</h3>
                    </div>
                </div>
                <div className="portfolio-project" style={{backgroundImage: 'url(./Personal.png)'}}>
                    <div>
                        <a href='https://github.com/Doro-Chau/My-Website' target='_blank'>View Project</a>
                        <h3>Personal Website</h3>
                    </div>
                </div>
                <div className="portfolio-project" style={{backgroundImage: 'url(./TMR.jpeg)'}}>
                    <div>
                        <a href='https://medium.com/@dorothychau1316/tmr-internship-some-reflection-on-my-life-in-tmr-26065e4c0914' target='_blank'>View Project</a>
                        <h3>TMR</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}