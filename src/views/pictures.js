import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './pictures.css'

const Pictures = (props) => {
  return (
    <div className="pictures-container">
      <Helmet>
        <title>Pictures - ACL WH7 Final - Matthew Yakligian</title>
        <meta
          property="og:title"
          content="Pictures - ACL WH7 Final - Matthew Yakligian"
        />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name3"></Navigation>
      <div className="pictures-hero section-container">
        <div className="pictures-max-width max-content-container">
          <div className="pictures-content-container">
            <h1 className="pictures-text heading1">
              <span>Pictures</span>
              <span></span>
            </h1>
          </div>
          <div className="pictures-video-container"></div>
        </div>
        <div className="pictures-blue-background"></div>
      </div>
      <div className="pictures-picture-container">
        <img
          alt="image"
          src="/playground_assets/5ff06342-7a14-4ce6-89d2-c59a04deb676-800w.jpg"
          className="pictures-image"
        />
        <span className="pictures-text03">
          <span>Soldiers forcing Armenian men to An execution site</span>
          <br></br>
          <span className="pictures-text06">
            My Great-Great Grandfather, Karnig Yakligian, lived during the
            Armenian Genocide. During the Armenian Genocide, people would kill
            Christians living in the Ottoman Empire. He lived in the Ottoman
            empire. More than 1.2 of the 1.5 Million people in the empire were
            killed during this event. This lasted 2 years, 1915-16. He fled to
            America along with Thousands of others
          </span>
          <br></br>
        </span>
      </div>
      <div className="pictures-picture-container01">
        <img
          alt="image"
          src="/playground_assets/b-17_holey_joe-800w.jpg"
          className="pictures-image1"
        />
        <span className="pictures-text08">
          <span className="pictures-text09">
            B-17 Bomber &quot;Holey Joe&quot;
          </span>
          <span className="pictures-text10"></span>
          <br></br>
          <span className="pictures-text12">
            My great-grandfather&apos;s Brother, Fritz, piloted this plane a few
            times to complete very important missions during WWII. This plane is
            now in a museum in washington D.C. He was not the only pilot that
            ever flew it, but he was one of the ones that did.
          </span>
          <br></br>
        </span>
      </div>
      <div className="pictures-picture-container02">
        <img
          alt="image"
          src="/playground_assets/20210428_212424-800w.jpg"
          className="pictures-image2"
        />
        <span className="pictures-text14">
          <span className="pictures-text15">Marty Zimmerman SR (right)</span>
          <br></br>
        </span>
      </div>
      <div className="pictures-picture-container03">
        <img
          alt="image"
          src="/playground_assets/resized_20200807_191906-800w.jpg"
          className="pictures-image3"
        />
        <span className="pictures-text17">
          <span className="pictures-text18">Marty Zimmerman JR</span>
          <br></br>
        </span>
      </div>
      <div className="pictures-picture-container04">
        <img
          alt="image"
          src="/playground_assets/fb_img_1560710225031-800w.jpg"
          className="pictures-image4"
        />
        <span className="pictures-text20">
          <span className="pictures-text21">
            Left To Right: Marylin Varsos, George Varsos, Carolyn Varsos
          </span>
          <br></br>
        </span>
      </div>
      <div className="pictures-picture-container05">
        <img
          alt="image"
          src="/playground_assets/fb_img_1644817136112-800w.jpg"
          className="pictures-image5"
        />
        <span className="pictures-text23">
          <span className="pictures-text24">George &amp; Tess Varsos</span>
          <br></br>
        </span>
      </div>
      <div className="pictures-picture-container06">
        <img
          alt="image"
          src="/playground_assets/fb_img_1636846202639-800w.jpg"
          className="pictures-image6"
        />
        <span className="pictures-text26">
          <span className="pictures-text27">George Varsos</span>
        </span>
      </div>
      <div className="pictures-picture-container07"></div>
      <div className="pictures-picture-container08">
        <img
          alt="image"
          src="/playground_assets/20210430_102601-800w.jpg"
          className="pictures-image7"
        />
        <span className="pictures-text28">
          <span className="pictures-text29"></span>
          <span className="pictures-text30">
            MY Great-Grandfather&apos;s School
          </span>
        </span>
      </div>
      <div className="pictures-picture-container09">
        <img
          alt="image"
          src="/playground_assets/20210430_102612-800w.jpg"
          className="pictures-image8"
        />
        <span className="pictures-text31">
          <span className="pictures-text32"></span>
          <span className="pictures-text33">
            MY Great-Grandfather Standing in Front of A Barn He Built Himself
          </span>
        </span>
      </div>
      <div className="pictures-container1">
        <span className="pictures-text34">
          THIS WEBSITE WAS CREATED BY MATTHEW YAKLIGIAN FOR THE ACL WORLD
          HISTORY FINAL 2022
        </span>
        <span className="pictures-text35">
          ©2022 Yakligian INC, All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default Pictures
