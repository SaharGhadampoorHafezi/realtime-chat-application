import React from 'react'
import '../style.scss'
import profile from '../images/photo for profile.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={profile} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Message