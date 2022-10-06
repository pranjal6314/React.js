import React from 'react'
import video from "../assets/MBA.mp4"
const IntroVideo = () => {
  return (
    <div className='intro'>
        <video src={video} mutes autoPlay loop controlsList='nodownload'></video>
    </div>
  )
}

export default IntroVideo
