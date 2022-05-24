import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './family-tree.css'

const FamilyTree = (props) => {
  return (
    <div
      id="https://lucid.app/documents/embeddedchart/d770d6e0-dc06-4a0e-8cee-c44108f453ec"
      className="family-tree-container"
    >
      <Helmet>
        <title>Family Tree - ACL WH7 Final - Matthew Yakligian</title>
        <meta
          property="og:title"
          content="Family Tree - ACL WH7 Final - Matthew Yakligian"
        />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name1"></Navigation>
      <div className="family-tree-hero section-container">
        <div className="family-tree-max-width max-content-container">
          <div className="family-tree-content-container">
            <h1 className="heading1 family-tree-text">
              <span>Family Tree</span>
            </h1>
            <span>
              <span>Not Including siblings</span>
              <span></span>
            </span>
          </div>
          <div className="family-tree-video-container"></div>
        </div>
        <div className="family-tree-blue-background"></div>
      </div>
      <div className="family-tree-container1">
        <iframe
          src="https://lucid.app/documents/embeddedchart/d770d6e0-dc06-4a0e-8cee-c44108f453ec"
          className="family-tree-iframe"
        ></iframe>
      </div>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vS3Um_ljVRhCbHfUWJ-sL9i2buayqQTqxjwEbXc9TegCfw2RUJeHLsS3DDiA1OCDLhcXh-hg5OZXkeT/embed?start=true&amp;loop=true&amp;delayms=7500"
        className="family-tree-iframe1"
      ></iframe>
      <div className="family-tree-container2">
        <span className="family-tree-text5">
          THIS WEBSITE WAS CREATED BY MATTHEW YAKLIGIAN FOR THE ACL WORLD
          HISTORY FINAL 2022
        </span>
        <span className="family-tree-text6">
          ©2022 Yakligian INC, All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default FamilyTree
