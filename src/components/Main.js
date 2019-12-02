import React, { useState, useEffect } from 'react'
import Pillar from '../assets/img/pillar.svg'
import Gladiator from '../assets/img/gladiator.svg'
import Bubble from './Bubble'
import Calculator from './Calculator'

export default function Main() {
  const [countMessage, setCountMessage] = useState(0)
  const [bounce, setBounce] = useState(false)
  const [message, setMessage] = useState('Salve!')
  const [footnote, setFootnote] = useState(
    `(That means "hello" in Latin...)\n\n Click here if you want to know more about this calculator.`
  )

  useEffect(() => {
    setBounce(() => true)
  })

  const updateMessage = () => {
    setBounce(false)

    switch (countMessage) {
      case 0:
        setMessage('Habemus Calculator')
        setFootnote(
          'With this calculator you will be able to perform some operations with Roman numerals.'
        )
        setCountMessage(prevCount => prevCount + 1)
        break

      case 1:
        setMessage('Remember')
        setFootnote('There is no zero nor negative numbers in Roman numerals.')
        setCountMessage(prevCount => prevCount + 1)
        break

      case 2:
        setMessage("Don't forget the rules")
        setFootnote(
          'In standard Roman numerals we should not use more than three consecutive copies of the same letter. V, L and D are not repeated at all.'
        )
        setCountMessage(prevCount => prevCount + 1)
        break

      case 3:
        setMessage("It's worth recalling that...")
        setFootnote(
          'The traditional Roman numeral system was used for numbers only up to 3,999. We are following this rule here.'
        )
        setCountMessage(prevCount => prevCount + 1)
        break

      case 4:
        setMessage('One last thing... Gaude!')
        setFootnote('(Or, like you say, "have fun"!)')
        setCountMessage(0)
        break
    }
  }
  return (
    <>
      <div className="item left">
        <Pillar className="pillar" />
      </div>

      <div className="item center">
        <Calculator />
      </div>

      <div className="item right">
        <Pillar className="pillar" />
      </div>

      <div className="item character" onClick={updateMessage}>
        <Gladiator className="gladiator" />
        <Bubble message={message} footnote={footnote} bounce={bounce} />
      </div>
    </>
  )
}
