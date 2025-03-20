import { useState } from "react";
import "./about.css";

function About() {
    const [isVisible, setIsVisible]=useState(false);

    function showData(){
        console.log("button");
        setIsVisible(true);
        
    }
    return (
        <div className="about">
            <h2>Roland Hogan</h2>
            { isVisible ? <h5>RolandHHogan@gmail.com</h5> : <label className='d-block'>Click the button to see email</label> }

            <button className='btn btn-dark' onClick={showData}>See email</button>
        </div>
    )
}





export default About;