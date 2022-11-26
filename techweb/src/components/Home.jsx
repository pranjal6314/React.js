import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
      <main> 
        <h1>Webtech</h1>
        <p>wellcome</p> 
      </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente laboriosam harum tempora ullam excepturi blanditiis. Autem incidunt architecto cupiditate.</p>
    </div>
    <div className="home3" id="about">
      <div><h1>Who We Are!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam natus harum quidem, illum incidunt aperiam cumque reprehenderit quae molestiae blanditiis labore nostrum mollitia ducimus ut quisquam. Possimus ea aperiam quam. Ad dolorem enim accusantium tempore dolor, mollitia eum cupiditate fugit veritatis ex? Eius voluptates asperiores iusto nemo porro. Quaerat!</p>
      </div>
    </div>

    <div className='home4' id='brands'>
      <div>
      <h1>Brands</h1>
      <article >
        <div style={{
          animationDelay: '0.3s',
            }}>
            <AiFillGoogleCircle />
            <p>Google</p>
        </div>
        <div style={{
          animationDelay: '0.5s',
            }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
        </div>
        <div style={{
          animationDelay: '0.7s',
            }}>
            <AiFillInstagram />
            <p>Instagram</p>
        </div>
        <div style={{
          animationDelay: '0.9s',
            }}>
            <AiFillYoutube />
            <p>Youtube</p>
        </div>
      </article>
      </div>
    </div>
    </>
  )
}

export default Home
