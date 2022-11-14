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
    <div className="home3">
      <div><h1>Who We Are!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam natus harum quidem, illum incidunt aperiam cumque reprehenderit quae molestiae blanditiis labore nostrum mollitia ducimus ut quisquam. Possimus ea aperiam quam. Ad dolorem enim accusantium tempore dolor, mollitia eum cupiditate fugit veritatis ex? Eius voluptates asperiores iusto nemo porro. Quaerat!</p>
      </div>
    </div>
    </>
  )
}

export default Home
