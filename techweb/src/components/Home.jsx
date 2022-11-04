import React from 'react'
import vg from "../assests/2.webp"

const Home = () => {
  return (
    <>
      <div className='home'>
      <main> 
        <h1>home</h1>
        <p>wellcome</p> 
      </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente laboriosam harum tempora ullam excepturi blanditiis. Autem incidunt architecto cupiditate.</p>
    </div>
    </>
  )
}

export default Home
