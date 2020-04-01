import React from 'react'
import './About.css'
import Contact from './Contact'

function About() {
  return (
    <div className="about-container">
      <div className="content">
        <h1>About</h1>
        <hr />
        <p>
          I am recently unemployed and thought I would put some of my skills to work after seeing that The New York
          Times was publishing it's extensive statistics for COVID-19 AKA Coronavirus. My primary goal was to quickly
          build something that was fast, responsive, and focused on the numbers with little to no commentary. I built
          some algorithms for aggregating and normalizing The New York Time's data, then experimented with a few
          different mapping and charting frameworks. The result is a few days work, but something I will continue
          updating and tweaking.
        </p>
        <p>
          For more in-depth information or help, I have compiled a list of helpful links below. Above and beyond all,
          please keep yourself and your families safe and let's fight this thing together.
        </p>
        <ul>
          <li>
            <a href="https://www.cdc.gov/coronavirus" target="_blank" rel="noopener noreferrer">
              CDC - Center for Disease Control and Prevention
            </a>
          </li>
          <li>
            <a
              href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/coronavirus-safety.html"
              target="_blank"
              rel="noopener noreferrer">
              American Red Cross
            </a>
          </li>
          <li>
            <a href="https://www.nytimes.com/news-event/coronavirus/" target="_blank" rel="noopener noreferrer">
              The New York Times
            </a>
          </li>
          <li>
            <a href="https://www.washingtonpost.com/topics/coronavirus/" target="_blank" rel="noopener noreferrer">
              The Washington Post
            </a>
          </li>
          <li>
            <a href="https://www.bbc.com/news/coronavirus/" target="_blank" rel="noopener noreferrer">
              BBC
            </a>
          </li>
          <li>
            <a href="https://www.un.org/en/coronavirus" target="_blank" rel="noopener noreferrer">
              United Nations
            </a>
          </li>
        </ul>
        <hr />
        <Contact />
      </div>
    </div>
  )
}

export default About
