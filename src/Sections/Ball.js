import React from "react";
import TagCloud from "TagCloud";

export default function Ball() {

    const myTags = ['Python', 'JavaScript', 'Git', 'SQL', 'AWS', 'Six', 'Flask', 'swagger', 'Django', 'GCP', 'CSS', 'HTML', 'Docker', 'Mongo DB', 'Airflow', 'EC2']

    React.useEffect(() => {
        var tagcloud = TagCloud('.ball-cont', myTags, {
            radius: 220,
            maxSpeed: 'fast',
            initSpeed: 'fast',
        })
    }, [] )

    return (
        // <div className="ball-cont" >
        //     <div style={{transform: 'translate3d(-250px, 0, -250px)'}}>
        //         <p >Python</p>
        //     </div>
            
        //     <p style={{transform: 'translate3d(0, -250px, -250px)'}}>JavaScript</p>
        //     <p style={{transform: 'translate3d(250px, 0, -250px)'}}>Git</p>
        //     <p style={{transform: 'translate3d(0, 250px, -250px)'}}>SQL</p>
        //     <p style={{transform: 'translate3d(0, 0, 0)'}}>AWS</p>
        //     <p style={{transform: 'translate3d(0, 0, -500px)'}}>Flask</p>
        //     <p style={{transform: 'translate3d(-125px, -125px, -375px)'}}>Django</p>
        //     <p style={{transform: 'translate3d(125px, 125px, -375px)'}}>GCP</p>
        //     <p style={{transform: 'translate3d(-125px, 125px, -375px)'}}>CSS</p>
        //     <p style={{transform: 'translate3d(125px, -125px, -375px)'}}>HTML</p>
        //     <p style={{transform: 'translate3d(-125px, -125px, -125px)'}}>Docker</p>
        //     <p style={{transform: 'translate3d(125px, 125px, -125px)'}}>Mongo DB</p>
        //     <p style={{transform: 'translate3d(-125px, 125px, -125px)'}}>Airflow</p>
        //     <p style={{transform: 'translate3d(125px, -125px, -125px)'}}>EC2</p>
            
        // </div>
        <div className="ball-cont"></div>
    )
}