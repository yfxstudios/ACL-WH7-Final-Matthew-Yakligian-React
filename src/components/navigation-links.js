import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink navigation-Link">
        {props.link1}
      </Link>
      <Link
        to="/family-tree"
        className="navigation-links-navlink1 navigation-Link"
      >
        {props.link11}
      </Link>
      <Link
        to="/interviews"
        className="navigation-links-navlink2 navigation-Link"
      >
        {props.link2}
      </Link>
      <Link
        to="/pictures"
        className="navigation-links-navlink3 navigation-Link"
      >
        {props.link21}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link21: 'Pictures',
  link11: 'About',
  link2: 'Speakers',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link21: PropTypes.string,
  link11: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
