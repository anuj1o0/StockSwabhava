import React, { useState, useEffect, useRef } from 'react'
import NETS from 'vanta/dist/vanta.globe.min'
import "./Home.css"
import home from "./home.png"
// import homeinfo from "./homeinfo.jpg"
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Home = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NETS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  
  return( 
  <div className='home' ref={myRef}>
    <header className="header">
        <div className="header-logo">
          <img src={home} alt="Logo" />
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/stocks">Stocks</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </header>

      <div className="content-container">
        <div className="left-content">
          <h1>Sentiment Stocks</h1>
          <h2>Sentiment Intelligence</h2>
          <p>Emotion-driven stock recommendations <br /> tailored to your unique sentiment profile. Invest wisely.</p>
          <button>Explore Now</button>
        </div>
        {/* <div className="right-content">
          <img src={homeinfo} alt="Image" />
        </div> */}
      </div>
  </div>
  )
}

export default Home