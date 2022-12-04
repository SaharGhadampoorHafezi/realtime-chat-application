import React from 'react'
import '../style.scss'
import profile from '../images/photo for profile.jpg'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { ChatContext } from '../Context/ChatContext'

const Message = ({message}) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src={profile} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="" alt="" />
      </div> */}
    </div>
  )
}

export default Message