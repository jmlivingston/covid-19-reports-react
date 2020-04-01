import React from 'react'
import './SEOImage.css'

// Poor man's Photoshop -
// 1. Open Chrome Dev Tools
// 2. Select section
// 3. Type CMD+Shift+P
// 4. Search for "Capture Node Screenshot"
// 5. Repeat for each section.
// 6. Copy each to public directory and change name to logo192.png, logo512.png, and logo1024.png

function SEOImage() {
  const title = 'COVID-19'
  const subTitle = 'Maps & Charts'
  const subSubTitle = 'No Commentary'
  return (
    <>
      <section className="logo-192">
        <div>
          <h1>{title}</h1>
          <hr />
          <h2>{subTitle}</h2>
          <h3>{subSubTitle}</h3>
        </div>
      </section>

      <section className="logo-512">
        <div>
          <h1>{title}</h1>
          <hr />
          <h2>
            {subTitle} &#xb7; {subSubTitle}
          </h2>
        </div>
      </section>

      <section className="logo-1024">
        <div>
          <h1>{title}</h1>
          <hr />
          <h2>
            {subTitle} &#xb7; {subSubTitle}
          </h2>
        </div>
      </section>
    </>
  )
}

export default SEOImage
