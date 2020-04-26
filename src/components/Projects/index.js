import React from 'react';
import './style.css'

import BurgerBlogger from './BurgerBlogger.png';
import DaySchedule from './DaySchedule.png';
import Kanban from './Kanban.png';
import Rate from './rate.png';
import Weather from './weather.png';
import Password from './Password.png';

const Example = (props) => {
  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <h2 className="card-title">Burger Blogger</h2>
            <div className="card-body">
              <img src={BurgerBlogger} id="burgerblogger" alt="Track your burger" Align="Center"></img></div>
              <a className="BurgerBlogger" href="https://morning-reaches-79219.herokuapp.com/" Align="Center"> Try A Burger </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h2 className="card-title">Day Planner</h2>
            <div className="card-body">
              <img src={DaySchedule} id="DayScheule" alt="Plan your day" Align="Center"></img></div>
              <a className="Planning" href="https://clcamou.github.io/calendar/" Align="Center"> Plan Out Your Day </a>
          </div>
        </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <h2 className="card-title">Kanban Board</h2>
            <div className="card-body">
              <img src={Kanban} id="Kanban" alt="Plan your project" Align="Center"></img></div>
              <a className="Planning" href="https://fabybacenelson.github.io/Project-One/index.html" Align="Center"> Plan Out Your Day </a>
            </div>
          </div>
          <div className="col-md-6">
          <div className="card">
            <h2 className="card-title">Rate Your Roommate</h2>
            <div className="card-body">
              <img src={Rate} id="Rate" alt="Roommate Rating System" Align="Center"></img></div>
              <a className="Ratings" href="https://aqueous-shelf-03682.herokuapp.com/" Align="Center"> Rate A Roommate </a>
            </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <div className="card">
            <h2 className="card-title">Weather Dashboard</h2>
            <div className="card-body">
              <img src={Weather} id="Weather Dashboard" alt="Check the Weather" Align="Center"></img></div>
              <a className="Weather" href="https://clcamou.github.io/WeatherDashboard/" Align="Center"> Find Weather in Your City </a>
            </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h2 className="card-title">Password Generator</h2>
            <div className="card-body">
              <img src={Password} id="Secure Password" alt="Check the Weather" Align="Center"></img></div>
              <a className="Password" href="https://clcamou.github.io/rpgenerator/rpgen" Align="Center"> Find Weather in Your City </a>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Example;