import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>

        <div className='about-content'>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Library</h2>
            <p className='fs-17'>The Library is a platform that allows users to find and access books from around the world. It features an extensive database, search capabilities, Fetch book details and a user-friendly interface. The project aims to connect readers with global literature, fostering cultural exchange and knowledge sharing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About