import React from 'react'
import '../style.scss'
import profile from '../images/photo for profile.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Lama Chat</span>
        <div className="user">
            <img src={profile} alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar