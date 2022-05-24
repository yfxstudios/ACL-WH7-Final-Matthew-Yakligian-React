import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigation-header ${props.rootClassName} `}
    >
      <h1 className="navigation-text">{props.text}</h1>
      <div className="navigation-max-width">
        <div className="navigation-nav">
          <NavigationLinks
            link1="Home"
            link2="Interviews"
            link3="About Me"
            link11="Family Tree"
            rootClassName="navigation-links-root-class-name17"
            className=""
          ></NavigationLinks>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  text: 'ACL WH7 Final - Matthew Yakligian',
  rootClassName: '',
}

Navigation.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navigation
