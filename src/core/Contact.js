import React from 'react'
import './About.css'
import Button from './Button'

function Contact() {
  return (
    <div className="about-container">
      <div className="content">
        <h1>Contact</h1>
        <hr />
        <p>
          As am recently unemployed, but actively seeking full-time or contract employment. I have a proven record for
          building highly performant, accessible, secure, responsive, and maintainable front-end systems that integrate
          seamlessly with the backend. I will help lead and build up your team, handle your front-end architecture, or
          be a highly productive individual contributor. I consider myself a full-stack engineer with a focus on
          technologies such as React, Node, Azure, Git. For more information, please check out my resume.
        </p>
        <div className="text-center">
          <Button
            isActive={true}
            href="https://docs.google.com/document/d/1XtegNZsCSssBPXJVmd4tmx7c_yUUzXN_vv8GXWLOKAM/edit?usp=sharing">
            Resume
          </Button>
          <Button
            isActive={true}
            href="mailto:jmlivingston@gmail.com?subject=I saw your Covid-19 map and would like to chat!">
            Email
          </Button>
        </div>
        <br />
        <hr />
        <div className="links">
          <a
            href="https://mobile.twitter.com/intent/tweet?text=https%3A%2F%2Fjmlivingston.github.io%2Fcovid-19-reports-react"
            target="_blank"
            rel="noopener noreferrer">
            Share on Twitter
          </a>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Contact
