import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


function MyGroupsCard({ myGroup }) {

  var res = myGroup.avatar.match(/^\/\//g);
  const url = res == null ? `http://localhost:3001/static/img/${myGroup.avatar}` : myGroup.avatar;

  return (
    <ul className="mygroups-list">
      <li className="mygroups-item">
        <div className="mygroups-img-container">
          <img className="mygroups-img" src={url} alt=""/>
        </div> 
        <div className="mygroups-content">
          <h3 className="mygroups-content-heading">{myGroup.name}</h3>
          <ul className="mygroups-content-list">
            <li className="mygroups-content-item">
              <h4 className="mygroups-content-stat-heading">Posts</h4>
              <p className="mygroups-content-stat">{myGroup.posts.length}</p>
            </li>
            <li className="mygroups-content-item">
              <h4 className="mygroups-content-stat-heading">Members</h4>
              <p className="mygroups-content-stat">{myGroup.members.length}</p>
            </li>
            <li className="mygroups-content-item">
              <h4 className="mygroups-content-stat-heading">Likes</h4>
              <p className="mygroups-content-stat">{myGroup.events.length}</p>
            </li>
          </ul>
          <Link to={`/groups/${myGroup._id}`}>
            <button className="btn btn-secondary mygroups-btn">View Group</button>
          </Link>  
          <Link to="/create/event">
            <button className="btn btn-primary mygroups-btn">Create Event</button>
          </Link> 
        </div>
      </li>
    </ul>
  )
}

export default MyGroupsCard
