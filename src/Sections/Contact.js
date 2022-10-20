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

    const [inputValue, setInputValue] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    function handleChange(event) {
        setInputValue((state) => (
            {
                ...state,
                [event.target.id]: event.target.value,
            }
        ))
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
                        <input type='text' id='name' placeholder="Name" value={inputValue.name} onChange={handleChange} />
                        <hr />
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <input type='email' id='email' placeholder="Email" value={inputValue.email} onChange={handleChange} />
                        <hr />
                    </div>
                    <div>
                        <input type='text' id='subject' placeholder="Subject" value={inputValue.subject} onChange={handleChange} />
                        <hr />
                    </div>
                    <div>
                        <textarea id='message' placeholder="Message" value={inputValue.message} onChange={handleChange} />
                        <hr />
                    </div>
                
                    <button style={{marginTop: '10px'}} onClick={() => window.open(`mailto:dorothychau1316@gmail.com?subject=${inputValue.name}-${inputValue.subject}&cc=${inputValue.email}&body=${inputValue.message}`)}>Send Message</button>
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