import React from 'react';
import '../About/about.css';
import './home.css';
// images
import bgVideo from "../../images/bgVideo.mp4";
import services from "../../images/services.jpg";

const About = () => {
    return (
        <>
            <div className='Testimonials' style={{ backgroundImage: `url(${services})` }}>
                <h1>About us</h1>
            </div>
            <div className="container_about">
                <div className="text-about">
                    <div className="title_about">
                        Who we <span>are?</span>
                    </div>
                    <p>Fit-Genie has the best personal training program
                        ,Our certified personal trainers are experts in their craft
                        , We create the perfect programs to help you reach your goals
                        , Everything begins with our energy and
                        figuring out how to evolve that, then the journey begins.</p>
                </div>
                <div>
                    <video autoPlay loop muted className="video">
                        <source src={bgVideo} type="video/mp4">
                        </source>
                    </video>
                </div>
            </div>
        </>
    )

}




export default About;