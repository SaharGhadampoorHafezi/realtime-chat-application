import React from 'react'
import '../style.scss'
import profile from '../images/photo for profile.jpg'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='Find a user'/>
        </div>
        <div className="userChat">
            <img src={profile} alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search