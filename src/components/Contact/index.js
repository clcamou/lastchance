import React from "react";
import './style.css';
import Resume from './Resume.pdf'

import Repo from './repo.png'
function Contact() {
    return (
        <div className="container">
            <div className="contentWrapper">
                <br></br>
                <h2> How to Contact Me </h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header" id="GitHub" Align="Center">
                                <h2 className="card-title">GitHub</h2></div>
                            <div className="card-body">
                                <img src={Repo} id="github" alt="GitHub" Align="Center"></img></div>
                            <div type="button" className="btn">
                                <a className="github" href="https://github.com/clcamou"> View Repositories </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header" id="resume" Align="Center">
                                <h2 className="card-title-1">Resume</h2></div>
                            <div className="card-body">
                                <p className="card-text">
                                    <embed src={Resume} width="100%" height="300px" /> </p>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header" id="Linkedin">
                                        <h2 className="card-title"> Linkedin </h2> </div>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="christine-camou-a09a6b115"><a className="LI-simple-link" href='https://www.linkedin.com/in/christine-camou-a09a6b115?trk=profile-badge'>Christine Camou</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

    )
}

export default Contact;