import PropTypes from 'prop-types'
import React from 'react'
import './Button.css'

const Check = ({ isActive }) =>
  isActive ? <span className="button-check">&#x2713;</span> : <span className="button-check">&nbsp;</span>

Check.propTypes = {
  isActive: PropTypes.bool,
}

function Button({ children, className, href, isActive, isCheckable, onClick }) {
  return href ? (
    <a
      className={`button${isActive ? ' active' : ''}${className ? ' ' + className : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <button className={`button${isActive ? ' active' : ''}${className ? ' ' + className : ''}`} onClick={onClick}>
      {children} {isCheckable && <Check isActive={isActive} />}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  isCheckable: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
