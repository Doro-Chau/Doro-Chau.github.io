import React from "react";
import { read } from "two.js/src/utils/interpret-svg";
import '../App.css';

import { springyEmojiCursor } from "./Spring";

export default function Title() {

    const firstLine = 'Hi,';
    const secondLineOne = 'I’m';
    const secondLineTwo = 'orothy,';
    const thirdLineOne = 'software';
    const thirdLineTwo = 'developer';

    const [animation, setAnimation] = React.useState(true);
    
    const myRef = React.useRef(null)

    React.useEffect(() => {
        const targetElement = document.querySelector("#title");
        new springyEmojiCursor({element: targetElement});
    }, [])
    
        
    React.useEffect(() =>{
        setTimeout(() => {
            setAnimation(false);
        }, 3500)
    }, []);

    function getTitle(text, z, delay) {
        const output = []
        for (let i = 0; i < text.length; i++) {
            output.push(
                <span className="title-titlecharacter"  key={`${text}${i}`} style={{zIndex: z, opacity: animation && '0', animation: animation &&  'bouncefirst 0.5s', 
                animationDelay: animation && `${delay + 0.08 * i}s`, animationFillMode: animation && 'forwards'}}>{text[i]}</span>
            )
        }

        return output
    }
    
    const [position, setPosition] = React.useState(
        {
            list: []
        }
    )

    var balls = []
    React.useEffect(
        () => {
            for (let i = position.length; i < 0; i--) {
                if (i < position.length - 50) {
                    break
                } 
                balls.push(
                <div className='ribbon-ball' style={{position: 'absolute', top: position[i][1], left: position[i][0], 
                    width: 10, height: 10, backgroundColor: 'red', transition: '0.05s'}}></div>
            )}
        }, [position]
    )
    


    return(
        <div  ref={myRef} id='title' className="width title" onMouseMove={(event) => {
            setPosition((state) => ({
                list: [...state.list, [event.clientX, event.clientY]]
            }));
            
            }}>
            <div id='title'></div>
            <h6>&#60;html&#62;</h6>
            <h6>&nbsp;&nbsp;&#60;body&#62;</h6>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;h1&#62;</h6>
            <div className="title-maintitle">
                {getTitle(firstLine, 3, 0)}<br />
                {getTitle(secondLineOne, 2, 0.24)}
                
                <span className="title-titlecharacter title-titleD" style={{zIndex: 2, opacity: animation && '0', animation: animation &&  'bouncefirst 0.5s', 
                animationDelay: animation && `0.4s`, animationFillMode: animation && 'forwards'}}>&nbsp;D
                    <img className="title-logo" src='logo.svg' style={{animation: animation && 'rotatefirst 2s linear 0.9s', animationFillMode: animation && 'forwards'}} />
                </span>
                {getTitle(secondLineTwo, 2, 0.56)}<br />
                {getTitle(thirdLineOne, 1, 1.12)}
                <span className="title-titlecharacter" >&nbsp;</span>
                {getTitle(thirdLineTwo, 1, 1.76)}
                <h6 style={{display: 'inline'}}>&nbsp;&#60;/h1&#62;</h6>
            </div>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;p&#62;</h6>
                <h4>Data Engineer / Back-end Developer</h4>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/p&#62;</h6>
            <a href="#bottom">
                <button style={{marginLeft: '3rem', marginTop: '1.5rem'}} >Contact Me!</button>
            </a>
            <div className="scroll">
                <h5>Scroll Down &#x2192;</h5>
                <h5>Scroll Down &#x2192;</h5>
            </div>
            <div>
                {balls}
            </div>
        </div>
    )
}