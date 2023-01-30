import "./App.css";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Redux App-by Pranjal Choudhary</h1>
      </div>
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
