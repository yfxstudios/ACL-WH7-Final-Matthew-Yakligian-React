import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import './index.css'

const Index = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>ACL WH7 Final - Matthew Yakligian</title>
        <meta property="og:title" content="ACL WH7 Final - Matthew Yakligian" />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name4"></Navigation>
      <div className="index-container1">
        <div className="index-container2">
          <div className="index-container3">
            <main className="index-main">
              <div className="index-hero section-container">
                <div className="index-max-width max-content-container">
                  <div className="index-content-container">
                    <h1 className="heading1 index-text">My History</h1>
                    <span className="index-text1">
                      <span>Matthew Yakligian</span>
                    </span>
                  </div>
                  <div className="index-video-container"></div>
                </div>
                <div className="index-blue-background"></div>
              </div>
              <div className="index-family section-container">
                <div className="index-max-width1 max-content-container">
                  <div className="index-heading-container">
                    <span className="index-text3">2 adults, 3 Boys</span>
                    <h1 className="index-text4 heading2">
                      <span>Meet My Family</span>
                    </h1>
                  </div>
                  <div className="index-container4">
                    <SpeakerCard
                      role="Father"
                      lastName="Yakligian"
                      firstName="Aaron"
                      image_src="960f69b0-6a38-419b-9b12-2fd779119bdd"
                      rootClassName="speaker-card-root-class-name1"
                    ></SpeakerCard>
                    <SpeakerCard
                      role="Mother"
                      lastName="Yakligian"
                      firstName="Melinda"
                      image_src="/playground_assets/melinda-300h.jpg"
                      rootClassName="speaker-card-root-class-name"
                    ></SpeakerCard>
                  </div>
                  <div className="index-container5">
                    <SpeakerCard
                      role="Youngest Child: 10"
                      lastName="Yakligian"
                      firstName="Adam"
                      image_src="57db1a33-1b4f-411c-86a5-304e31dc2ced"
                      rootClassName="speaker-card-root-class-name2"
                    ></SpeakerCard>
                    <SpeakerCard
                      role="Middle Child: 12"
                      lastName="Yakligian"
                      firstName="Matthew"
                      image_src="f596d606-4733-498c-af6e-0faddef59d34"
                      rootClassName="speaker-card-root-class-name4"
                    ></SpeakerCard>
                    <SpeakerCard
                      role="Oldest Child: 14"
                      lastName="Yakligian"
                      firstName="Joseph"
                      image_src="/playground_assets/joe-300h.jpg"
                      rootClassName="speaker-card-root-class-name3"
                    ></SpeakerCard>
                  </div>
                </div>
                <Link to="/family-tree" className="index-navlink button">
                  VIEW MY FAMILY TREE
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="index-container6">
        <span className="index-text6">
          THIS WEBSITE WAS CREATED BY MATTHEW YAKLIGIAN FOR THE ACL WORLD
          HISTORY FINAL 2022
        </span>
        <span className="index-text7">
          ©2022 Yakligian INC, All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default Index
