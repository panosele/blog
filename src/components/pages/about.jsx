import React from "react";
import './css/about.css'
import './images/enydreio.jpg'
import Newsletter from "./home/Newsletter";

function About (){
    return (
        <div className="about-div">
            <h1>HELLO ABOUT PAGE</h1>
            <div className="container-about">
                <img className="enydreio-img" src="./images/enydreio.jpg" alt="rodos-view"></img>
                <div className="about-text">
                    <p>mpla-mpla a-mpla-mpla-masdfjiouedshfueiwsohfuwefwefwefwefwefwef</p>
                    <p>mpla-mpla a-mpla</p>
                    <p>mpla-mpla a-mpla</p>
                </div>
                <div className="contact-info">
                    <p>mpla-mpla a-mplaewfwefwefwe- sdfdeweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                    <p>mpla-mpla a-mpla</p>
                    <p>mpla-mpla a-mpla</p>
                </div>
                <Newsletter />
            </div>
        </div>
    )
}
export default About;