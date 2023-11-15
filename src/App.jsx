import { NavLink } from "react-router-dom"
import menuBtn from '/assets/svg/menu.svg'
import shareBtn from '/assets/svg/share.svg'
import gym from '/assets/equipment-1.jpg'
import person from '/assets/person.webp'
import project1 from '/assets/project-1.jpeg'
import project2 from '/assets/project-2.jpeg'
import project3 from '/assets/project-3.jpeg'
import showReel from '/assets/showreel.jpeg'
import facebook from '/assets/brands/facebook.svg'
import instagram from '/assets/brands/instagram.svg'
import twitter from '/assets/brands/twitter.svg'
import { useEffect, useRef, useState } from "react"

function App() {
  const project_1 = useRef();
  const project_2 = useRef();
  const project_3 = useRef();
  const toggleNavbar = function () {
    const navBar = document.querySelector('nav ul');
    navBar.classList.toggle('toggle-navbar');
  }
  const showBusinesses = function (e) {
    const title = document.querySelector('#hero h1');
    const businesses = document.querySelector('#hero .businesses');
    e.target.classList.toggle('shift-button');
    title.classList.toggle('shift-h1');
    businesses.classList.toggle('shift-business');
    e.target.innerText = e.target.classList.contains('shift-button') ? 'CLOSE' : `YOUR
    BUSINESS`;
  }
  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      entries.isIntersecting ? entries.target.classList.add('animate-work') : null;
      console.log(entries)
    });
    observer.observe(project_1.current);
  });
  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      entries.isIntersecting ? entries.target.classList.add('animate-work') : null;
      console.log(entries)
    });
    observer.observe(project_2.current);
  });
  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        return true;
      };
    });
    const value = observer.observe(project_3.current);
    console.log(value)
  });
  return (
    <>
      <header>
        <nav className="flex">
          {/* <NavLink to='/'><div>BRAND</div></NavLink> */}
          {/* <ul className="flex">
            <NavLink to='/'><li>our work</li></NavLink>
            <NavLink to='/'><li>contact</li></NavLink>
            <NavLink to='/'><li>connect</li></NavLink>
          </ul> */}
          {/* <svg onClick={toggleNavbar} width="32" height="32" viewBox="0 0 24 24" stroke="#fff" fill="none" strokeLinejoin="round" strokeWidth="1.125" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M19 7L5 7.00002M19 12H12M19 17L8 17"></path></svg> */}
        </nav>
        <div id="hero" className="container">
          <h1>HAVE A BUSINESS?<br /><span className="text-highlighter">LET'S GROW</span></h1>
          <div className="circular-div">
            {/*  onClick={e => showBusinesses(e)} */}
            <a href="tel: +919067183889" target="_blank" rel="noopener noreferrer"><button className="btn-bubble" type="button">CALL<br />NOW</button></a>
          </div>
          <div className="businesses flex">
            <div className="business">
              <img src={gym} alt="" />
            </div>
            <div className="business">
              <img src={gym} alt="" />
            </div>
            <div className="business">
              <img src={gym} alt="" />
            </div>
          </div>
        </div>
      </header>

      <main>

        {/* Show Reel */}
        <div id="show-reel" className="container flex">
          <div>
            <img src={showReel} alt="" />
          </div>
          <div>
            <h2>WHO WE ARE?</h2>
            <p>We are a dynamic agency dedicated to transforming ideas into reality. With a passion for innovation and a commitment to excellence, we specialize in delivering creative solutions that drive results and exceed expectations</p>
            <button className="btn-primary">CONTACT</button>
          </div>
        </div>

        {/* Our work */}
        <div id="work" className="container">
          <h2>OUR WORK</h2>
          <div className="work-container flex">
            <div>
              <div ref={project_1} className="work work-left">
                <img src={project1} alt="" className="project1" />
                <a target="_blank" href="https://inspire-gym-react.vercel.app/" className="flex">
                  <img src={shareBtn} alt="" className="shareBtn" />
                  INSPIRE
                </a>
              </div>
            </div>
            <div>
              <div ref={project_2} className="work work-right">
                <img src={project2} alt="" className="project2" />
                <a className="flex">
                  <img src={shareBtn} alt="" className="shareBtn" />
                  DOMINA
                </a>
              </div>
              <div ref={project_3} className="work work-right">
                <img src={project3} alt="" className="project3" />
                <a className="flex">
                  <img src={shareBtn} alt="" className="shareBtn" />
                  CLAN HEALTH
                </a>

              </div>
            </div>
          </div>
        </div>

      </main>
      {/* Testimonial */}
      <div id="testimonial" className="container">
        <h2>CLIENTS SAY !</h2>
        <div className="testimonial">
          <p>
            <span className="date">20<sup>th</sup> May, 2023-</span> <em><span className="testimonial-content">&quot;He brought my gym to life online! They turned my ideas into a kick-butt website that's easy for my clients to navigate. Working with them was a blast – super friendly and totally got what I wanted. My gym's looking sharp now, thanks to these awesome folks!</span></em>
          </p>
          <div className="person flex">
            <img src={person} alt="" className="person-image" />
            <div>
              <h5>Rajesh Patel</h5>
              <p>Owner, Inspire</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="container">
        <h1>LETS EXPAND YOUR<br /><span className="text-highlighter">BUSINESS</span></h1>
        <a href="tel: +919067183889"><button className="btn-bubble" type="button">CALL NOW</button></a>
        <div className="copyright flex">© 2023 Brand
          <div className="socials">
            <a href="https://www.facebook.com/people/Dnyaneshwar-Kawade/pfbid0GJuzt3pLk3fFPXuxo5fkVkxQvQpa6LGp5673bggsqygkwVkUU5hXH8ZmpRaoUjgtl/" target="_blank"><img src={facebook} alt="" /></a>
            <a href="https://instagram.com/dnyaneshwark_?igshid=NzZlODBkYWE4Ng==" target="_blank"><img src={instagram} alt="" /></a>
            <a href="https://twitter.com/_dnyaneshwar07" target="_blank"><img src={twitter} alt="" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
