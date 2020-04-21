import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function GroupHero() {
  return (
    <section className="groups-hero-container">
      <div className="groups-hero-card">
        <div className="groups-hero-img-container">
          <img className="groups-hero-img" src="../images/coverphoto.png" alt=""/>
        </div>
        <h2 className="groups-hero-group-name">Group Name</h2>
        <div className="groups-hero-content">

          <ul className="groups-hero-content-list">
            <li className="groups-hero-content-item">
              <h4 className="groups-hero-content-stat-heading">Posts</h4>
              <p className="groups-hero-content-stat">100</p>
            </li>
            <li className="groups-hero-content-item">
              <h4 className="groups-hero-content-stat-heading">Members</h4>
              <p className="groups-hero-content-stat">20</p>
            </li>
            <li className="groups-hero-content-item">
              <h4 className="groups-hero-content-stat-heading">Events</h4>
              <p className="groups-hero-content-stat">10</p>
            </li>
          </ul>
          <div className="groups-hero-content-buttons">
            <Link to="/join">
              <button className="btn btn-primary group-hero-btn">Join Group</button>
            </Link>
            <Link to="/group/events/1">
              <button className="btn btn-secondary group-hero-btn">View Group Events</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupHero