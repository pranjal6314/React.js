
import IntroVideo from './components/IntroVideo.jsx';
import Section from './components/Section.jsx';
import freshtopicImg from "./assets/academy.png";
import freshtopicImg2 from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif"
import data from "./data/data.json"
import './styles/App.scss';
import './styles/intro.scss';
import './styles/section.scss';

const yellow="#fff100",pink="#ed1e79",white="#fff",brown="#6d30f";
function App() {
  const {freshTopic,freshTopic2,tedTalks}=data;
  return (
    
    <>
        <IntroVideo/>
        <Section h3={freshTopic.heading} p={freshTopic.text} hasBtn={true} btntext={freshTopic.btn} imgSrc={freshtopicImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink}/>
        <Section h3={freshTopic2.heading} p={freshTopic2.text} hasBtn={true} btntext={freshTopic2.btn} imgSrc={freshtopicImg2} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btnColor={pink}/>
        <Section h3={tedTalks.heading} p={tedTalks.text} hasBtn={true} btntext={tedTalks.btn} imgSrc={tedTalksImg} backgroundColor={yellow} headingColor={pink} textColor={pink} btnbgColor={pink} btnColor={yellow}/>
    </>
  );
}

export default App;
