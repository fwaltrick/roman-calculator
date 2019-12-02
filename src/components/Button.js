import React from 'react'

export default function Button(props) {
  const { className, children, handleClick, error, testid } = props
  return (
    <div
      data-testid={testid}
      className={className}
      style={error ? { pointerEvents: 'none', opacity: '0.2' } : null}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}
