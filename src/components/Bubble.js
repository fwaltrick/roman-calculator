import React from 'react'

export default function Bubble(props) {
  const { message, footnote, bounce } = props

  return (
    <div className={`bubble ${bounce ? `bubble-bounce` : null}`}>
      <span
        style={{
          fontFamily: "'Spectral SC', serif",
          fontSize: '1rem',
          color: 'var(--clr-brick)'
        }}
      >
        {message}
      </span>
      {footnote && (
        <span
          style={{
            display: 'block',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '0.8rem',
            marginTop: '5px'
          }}
        >
          {footnote}
        </span>
      )}
    </div>
  )
}
