import React from 'react'
import '../style.scss'
import profile from '../images/photo for profile.jpg';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
        <span className="logo">Lama Chat</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut()}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar