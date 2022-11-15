import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'

import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';

function App() {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
      <footer/>
    </Router>


   </>
  );
}

export default App;
