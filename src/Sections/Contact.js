import React from "react";
import '../App.css';

export default function Contact() {
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
        <div className="width contact">
            <div className="about-textcont">
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;h2&#62;</h6>
                <div className="portfolio-description">
                    {getTitle('Contact')}
                    <span className="h2" >&nbsp;</span>
                    {getTitle('Me')}
                </div>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/h2&#62;</h6>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;</h6>
                <div className="portfolio-description">
                    <p>If you have any questions about me or my experience, don’t hesitate to contact me.</p>
                </div>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/p&#62;</h6>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;form&#62;</h6>
                <form className='contact-form' onSubmit={(event) => event.preventDefault()}>
                    <div style={{display: 'inline-block'}}>
                        <input placeholder="Name" />
                        <hr />
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <input placeholder="Email"/>
                        <hr />
                    </div>
                    <div>
                        <input placeholder="Subject"/>
                        <hr />
                    </div>
                    <div>
                        <textarea placeholder="Message"/>
                        <hr />
                    </div>
                    <button style={{marginTop: '10px'}} >Send Message</button>
                </form>
                <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/form&#62;</h6>
                
            
            </div>
            <div id='bottom' className="contact-map">
                <div className="contact-mapinfo">
                    <p style={{fontWeight: 'bold'}}>Dorothy Chao</p>
                    <p>No. 2, Liren St., Zhonghe Dist., New Taipei City, Taiwan (R.O.C.)</p>
                    <br />
                    <p>dorothychau1316@gmail.com</p>
                </div>
            </div>
        </div>
    )
}