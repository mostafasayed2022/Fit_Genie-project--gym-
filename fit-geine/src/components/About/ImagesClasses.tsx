import React from "react";
import './about.css';

// images

import zomba from "../../images/zomba.jpg";
import workout from "../../images/workout.jpg";
import workout_fitness from "../../images/workout_fitness.jpg";
import trx from "../../images/trx.jpg";
import boxing from "../../images/boxing.jpg";
import Body from "../../images/BudyBuilding.jpg";
import BARRE from "../../images/BARRE.jpg";
import running from "../../images/running.jpg";



function ImagesClasses() {
    return (
        <div className="images-container">
            <div className="box">
                <img src={zomba} alt=""/>
                    <div className="caption">
                        <h4>zomba</h4>
                        <p>Dancing to a mix of Latin and International Music.</p>
                    </div>
            </div>

            <div className="box">
                <img src={workout} alt=""/>
                    <div className="caption">
                        <h4>workout</h4>
                        <p>A workout is a period of physical exercise or training.</p>
                    </div>
            </div>
            <div className="box">
                <img src={workout_fitness} alt=""/>
                    <div className="caption">
                        <h4>workout_fitness</h4>
                        <p>Some good strength training exercises for beginners</p>
                    </div>
            </div>

            <div className="box">
                <img src={boxing} alt=""/>
                    <div className="caption">
                        <h4>boxing</h4>
                        <p>Boxing is a combat sport and a martial art in which two people.</p>
                    </div>
            </div>

            <div className="box">
                <img src={trx} alt=""/>
                    <div className="caption">
                        <h4>trx</h4>
                        <p>A form of suspension training that utilizes equipment</p>
                    </div>
            </div>


            <div className="box">
                <img src={Body} alt=""/>
                    <div className="caption">
                        <h4>bodyBuilding</h4>
                        <p> Bodybuilding, a regimen of exercises designed to enhance the human body's development and promote health and fitness.</p>
                    </div>
            </div>


            <div className="box">
                <img src={BARRE} alt=""/>
                    <div className="caption">
                        <h4>Barre</h4>
                        <p>The movements are inspired by ballet.</p>
                    </div>
            </div>


            <div className="box">
                <img src={running} alt=""/>
                    <div className="caption">
                        <h4>running</h4>
                        <p>Running is both a competition and a type of training for sports that have running.</p>
                    </div>
            </div>

        </div>
    );
}

export default ImagesClasses;