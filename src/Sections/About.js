import React from "react";
import '../App.css';

export default function About() {

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
        <div className="width about">
            <div className="about-textcont">
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2&#62;</h6>
                <div className="portfolio-description">
                    {getTitle('About')}
                    <span className="h2" >&nbsp;</span>
                    {getTitle('Me')}
                </div>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/h2&#62;</h6>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;</h6>
                <div className="portfolio-description">
                    <p>I am a self-taught data engineer. For more than two years, I learned programming language by myself. In April 2022, I joined a coding bootcamp and took their data engineering course. From then on, I devoted myself to data and cloud related fields. I currently work as a data engineer in a technology consulting company.</p>
                </div>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/p&#62;</h6>
            </div>
            <div className="about-ball">

            </div>
            <div className="scroll" style={{top: '250vh'}}>
                <h5>Scroll Down &#x2192;</h5>
                <h5>Scroll Down &#x2192;</h5>
            </div>
        </div>
    )
}