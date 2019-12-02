import React from 'react'

export default function Display(props) {
  const { error } = props
  return (
    <div className={`display-wrapper ${error ? 'display-error' : ''}`}>
      <div className="display-error-message">{error}</div>
      <div className="display-number">{props.children}</div>
    </div>
  )
}
