
import IntroVideo from './components/IntroVideo.jsx';
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx'
import Misc from './components/Misc.jsx'
import freshtopicImg from "./assets/academy.png";
import freshtopicImg2 from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif"
import franchiseImg from "./assets/franchise.gif"
import mapImg from "./assets/locations.png"
import coursesImg from "./assets/image2.png"
import albumImg from "./assets/mba-cares.gif"
import baratImg from "./assets/image1.png"
import chaiImg from "./assets/image3.png"
import data from "./data/data.json"
import './styles/App.scss';
import './styles/intro.scss';
import './styles/section.scss';
import './styles/Footer.scss'
import './styles/Misc.scss'
import './styles/mediaQuery.scss'
import { useEffect } from 'react';

import './styles/mediaQuery.scss'

// >>>>>>> b036824e0052096104d93c820def0b30f5c22c06
const yellow="#fff100",pink="#ed1e79",white="#fff",brown="#6d30f1";
function App() {
  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala}=data;
  const dotCursor=(e) =>{
   const cursor= document.querySelector('.cursor'); 
  //  cursor.style.top=e.pageY+"px";
    cursor.style.top=`${e.pageY-14 }px`;
    cursor.style.left=`${e.pageX -14}px`
  }
  
  useEffect(()=>{
    window.addEventListener("mousemove",dotCursor);
    return ()=>{
      window.removeEventListener("mousemove",dotCursor);
    
    }
   },[])
  return (
    
    <>
        <IntroVideo/>
        <Section h3={freshTopic.heading} p={freshTopic.text} hasBtn={true} btntext={freshTopic.btn} imgSrc={freshtopicImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink}/>
        <Section h3={freshTopic2.heading} p={freshTopic2.text} hasBtn={true} btntext={freshTopic2.btn} imgSrc={freshtopicImg2} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink}/>
        <Section h3={tedTalks.heading} p={tedTalks.text} hasBtn={true} btntext={tedTalks.btn} imgSrc={tedTalksImg} backgroundColor={yellow} headingColor={pink} textColor={pink} btnbgColor={pink} btnColor={yellow}/>
        <Section h3={franchise.heading} p={franchise.text} hasBtn={true} btntext={franchise.btn} imgSrc={franchiseImg} backgroundColor={white} headingColor={pink} textColor={brown} btnbgColor={brown} btnColor={yellow}/>
        <Section h3={map.heading} p={map.text} hasBtn={false}  imgSrc={mapImg} backgroundColor={pink} headingColor={yellow} textColor={yellow}  />
        <Section h3={courses.heading} p={courses.text} hasBtn={true} btntext={courses.btn} imgSrc={coursesImg} imgSize={"30%"}  backgroundColor={yellow} headingColor={pink} textColor={pink} btnbgColor={pink} btnColor={yellow}/>
        <Section h3={album.heading} p={album.text} hasBtn={true} btntext={album.btn} imgSrc={albumImg}   backgroundColor={white} headingColor={pink} textColor={brown} btnbgColor={brown} btnColor={yellow}/>
        <Section h3={barat.heading} p={barat.text} hasBtn={true} btntext={barat.btn} imgSrc={baratImg}   backgroundColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink}/>
        <Section h3={chaiwala.heading} p={chaiwala.text} hasBtn={true} btntext={chaiwala.btn} imgSrc={chaiImg}   backgroundColor={white} headingColor={pink} textColor={brown} btnbgColor={brown} btnColor={yellow}/>


      <Footer/>
      <Misc/>
    </>
  );
}

export default App;
