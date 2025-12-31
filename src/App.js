import './App.css';
import SplitText from "./bits/BlurText";
import logo from './image/Monarch3Logo.svg';
import favicon from './image/favicon.jpg';
import { useState } from "react";
import { Layout } from './layout/layout';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  let handleClick = (event) => {
    setSelectedOption(event.target.value);
    setSearchTerm("");
    setShowPopup(false);
  };

  let handleSearch = (event) => {
    if (event.target.value) {
      setSelectedOption("All");
      setSearchTerm(event.target.value);
    }
    else {
      setSelectedOption("");
    }
  };

  return (
    <div className="hello-container">
      <img src={logo} alt="Monarch Logo" className="logo-img" />

      <div className="hero-text">
        <SplitText
          text="WELCOME,"
          className="hello1"
          tag="h2"
          delay={100}
          duration={0.9}
          ease="power3.out"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
        />

        <SplitText
          text="To The Monarch Metal Intranet App!"
          className="hello"
          tag="h1"
          delay={50}
          duration={0.7}
          ease="power3.out"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
      </div>

      <div className="choices">
        <p>Please Select An Option</p>

        <div className="outside_buttons">
          <div className="buttons">
            <button className="btn" onClick={handleClick} value="Accounting">Accounting</button>
            <button className="btn" onClick={handleClick} value="Estimator">Customer Support</button>
            <button className="btn" onClick={handleClick} value="Sales">Sales</button>
            <button className="btn" onClick={handleClick} value="Shop">Shop</button>

          </div>
          <button className="btn extra" onClick={handleClick} value="All">Show All</button>
        </div>


      </div>

      <div className="martin-container">

        {showPopup && <div className="martin-popup">
          <input
            type="search"
            className="search"
            placeholder="Search Tools..."
            onChange={handleSearch}
            onInput={(e) => {
              if (!e.target.value) {
                setSearchTerm("");
                setSelectedOption("");
              }
            }}
            id="search"
            value={searchTerm}
          />
        </div>}

        <img
          src={favicon}
          alt="Martin"
          className="martin-ai"
          onClick={() => setShowPopup(!showPopup)}
        />

      </div>

      <Layout target={selectedOption} searchTerm={searchTerm} />

    </div>
  );
}

export default App;