import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Portal = ({ isOpened, selector, children, className }) => {
  // ClassName comes from the Styled Component
  const modalMarkup = (
    <div id={selector} className={className}>
      {children}
    </div>
  )
  if (!isOpened || selector === undefined) {
    return null
  }
  return ReactDOM.createPortal(
    modalMarkup,
    typeof document !== 'undefined' && document.body
  )
}

export default Portal

Portal.propTypes = {
  selector: PropTypes.string,
  isOpened: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
