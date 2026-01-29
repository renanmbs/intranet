import './App.css';
import SplitText from "./bits/BlurText";
import logo from './image/Monarch Metal Red 1 Transparent.png';
import logo2 from "./image/Monarch Metal White Transparent.png"
import favicon from './image/favicon.jpg';
import { useState } from "react";
import { Layout } from './layout/layout';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const {
    login,
    // eslint-disable-next-line
    register,
    // eslint-disable-next-line
    logout,
    isAuthenticated,
    isLoading,
    // eslint-disable-next-line
    user
  } = useKindeAuth();

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

  if (isLoading) return null;

  if (!isAuthenticated) {
    return (
      <div className="hello-container auth-screen">
        <div className="auth-card">
          <img src={logo2} alt="Monarch Logo" className="logo-img auth-logo" />

          <div className="auth-hero">
            {/* <h1 className="auth-title">Monarch Metal</h1> */}
            <p className="auth-title">
              Internal tools
            </p>
          </div>

          <div className="auth-buttons">
            <button className="btn auth-primary" onClick={login}>
              Sign In
            </button>
            {/* <button
              className="btn auth-secondary"
              onClick={() => {
                window.location.href =
                  "mailto:rsilva@monarchmetal.com" +
                  "?subject=Request%20Access%20–%20Monarch%20Metal%20Intranet" +
                  "&body=Hello%20Renan%2C%0A%0AI%20would%20like%20to%20request%20access%20to%20the%20Monarch%20Metal%20Intranet.%0A%0AName%3A%20%0ADepartment%3A%20%0AReason%20for%20access%3A%20%0A%0AThank%20you."
              }}
            >
              Request Access
            </button> */}
          </div>

          <p className="auth-footnote">
            Authorized personnel only
          </p>
        </div>
      </div>
    );
  }


  return (

    <div className="hello-container">
      <img src={logo} alt="Monarch Logo" className="logo-img" />

      <div className="top-bar">
        <button onClick={logout} className="logout-btn">
          Log out
        </button>
      </div>

      <div className="hero-text">
        <SplitText
          text="WELCOME,"
          className="hello1"
          tag="h2"
          delay={175}
          duration={1.5}
          ease="power3.out"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
        />

        <SplitText
          text="To The Monarch Metal Intranet App!"
          className="hello"
          tag="h1"
          delay={125}
          duration={1.5}
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