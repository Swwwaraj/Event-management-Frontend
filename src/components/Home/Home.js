import { useState, useEffect } from "react";

import Login from "../Login/Login";
import './Home.css';

export default function Home(props){  
    // localStorage.clear();
    const [isLoggedIn, setLoggedIn] = useState("false");

    useEffect(() => {
        setInterval(() => {
            const loginStatus = localStorage.getItem("loginStatus");
            setLoggedIn(loginStatus);
        }, [])
    }, 5000)

    if (!isLoggedIn || isLoggedIn === "false"){
        return(
            <div class="content">
                <div>
                <h1>Eventify</h1>
                    <p className="tagline">
                        <em> Event ticketing made simple </em>
                    </p>
                    <p className="about">
                    Say goodbye to the stress of organizing events and hello to seamless planning with EVENTIFY! Our all-in-one platform simplifies every step, from quick sign-ups and smooth registrations to hassle-free schedule management. Whether you're hosting a corporate conference, a grand wedding, or an intimate gathering, EVENTIFY ensures a flawless experience for both organizers and attendees. 
                    With an intuitive interface and powerful features, our system handles all the details, so you can focus on creating memorable moments. Trust EVENTIFY to bring your event vision to life—effortlessly, efficiently, and with a touch of magic! 🚀✨
                    </p>
                    
                </div>
                
                <Login/>
            </div>
        )

    }

    else{
        return(
            <div class = "content">
                <div>
                <h1>Eventify</h1>
                    <p className="tagline">
                        <em> Event ticketing made simple </em>
                    </p>
                    <p className="about">
                    Say goodbye to the stress of organizing events and hello to seamless planning with EVENTIFY! Our all-in-one platform simplifies every step, from quick sign-ups and smooth registrations to hassle-free schedule management. Whether you're hosting a corporate conference, a grand wedding, or an intimate gathering, EVENTIFY ensures a flawless experience for both organizers and attendees. 
                    With an intuitive interface and powerful features, our system handles all the details, so you can focus on creating memorable moments. Trust EVENTIFY to bring your event vision to life—effortlessly, efficiently, and with a touch of magic! 🚀✨
                    </p>
                </div>
            </div>
            
        )
    }
    
}