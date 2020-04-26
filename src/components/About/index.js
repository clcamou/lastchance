import React from 'react';
import './style.css';
import mypic from './Me.png';

function About() {
    return (
        <div>
            <div className="contentWrapper">
                <h1> About Me </h1>
                <img className="profile" src={mypic} Align="left" alt="Christine Camou"></img>
                <br></br>
                <p> I am a middle school math teacher at the Math and Science Success Academy. I have been teaching for the last
                five years, which has honed my skills in time management, problem-solving, creativity, flexibility, and
                interpersonal skills. If I can successfully teach a class of more than 50 students in a portable classroom in
                the parking lot of a school or outside on the recess benches in the middle of a construction zone, I can tackle
                any project, problem or task thrown my way.</p>

                <p> In addition to my duties as a math teacher, I coach the Science Olympiad team, the Robotics team, mentor three
                new teachers, and run the math department. These additional duties have helped shape my ability to both lead a
                team and to work collaboratively within a team.</p>

                <p> I am currently completely a coding bootcamp at the University of Arizona in order to become more knowledgeable about skills that are necessary to succeed in order to provide a higher quality of education to my students.</p>
            </div>
        </div>
    )
}

export default About;