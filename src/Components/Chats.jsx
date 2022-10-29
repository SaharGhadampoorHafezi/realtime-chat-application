import React from 'react'
import profile from '../images/photo for profile.jpg';
const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
            <img src={profile} alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img src={profile} alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img src={profile} alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img src={profile} alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default Chats