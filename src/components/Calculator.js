import React, { useState, useEffect } from 'react'
import { validateNumber, toRoman, toArabic } from '../utils/convert'

export default function Calculator() {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [curNum, setCurNum] = useState('')
  const [prevNum, setPrevNum] = useState('')
  const [result, setResult] = useState('')
  const [operator, setOperator] = useState('')

  const numbersKeys = ['C', 'D', 'M', 'V', 'X', 'L', 'CE', 'I', '=']
  const operatorsKeys = ['+', '-', '×']
  //   { sign: '+', operation: 'add' },
  //   { sign: '-', operation: 'subtract' },
  //   { sign: '×', operation: 'multiply' }
  // ]

  const handleInput = val => {
    // To clean the display automatically if you start typing a number after an operation
    if (result && result === input) {
      setInput('')
    }
    setInput(prevInput => prevInput + val)
  }

  const clearInput = () => setInput('')

  const calculation = operator => {
    setPrevNum(input)
    setInput('')
    setOperator(operator)
  }

  const evaluate = () => {
    const prevArabic = toArabic(prevNum)
    const curArabic = toArabic(curNum)
    let operation

    console.log(prevArabic, curArabic)

    if (operator === '+') {
      operation = toRoman(prevArabic + curArabic)
    } else if (operator === '-') {
      operation = toRoman(prevArabic - curArabic)
    } else if (operator === '×') {
      operation = toRoman(prevArabic * curArabic)
    } else {
      // In case the user click the equal button without previously selecting an operator
      operation = toRoman(curArabic)
    }

    setResult(operation)
    setInput(operation)
    setOperator('')
  }

  const composeOperations = num =>
    setError(validateNumber(toRoman(toArabic(num))))

  useEffect(() => {
    setError(validateNumber(input))
    setCurNum(input)
  })

  return (
    <div className="calc-wrapper">
      <Display error={error}>{input}</Display>
      <div className="numbers-wrapper">
        {numbersKeys.map(k => {
          return (
            <Button
              key={k}
              error={k !== 'CE' ? error : null}
              handleClick={
                k === 'CE' ? clearInput : k === '=' ? evaluate : handleInput
              }
              className={`button ${
                k === '=' || k === 'CE' ? 'utility' : 'number'
              } ${k === 'CE' ? 'ce' : null}`}
            >
              {k}
            </Button>
          )
        })}
      </div>
      <div className="operators-wrapper">
        {operatorsKeys.map(k => {
          return (
            <Button
              key={k}
              error={error}
              className="button operator"
              handleClick={calculation}
            >
              {k}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

function Button(props) {
  const { className, children, handleClick, error } = props
  return (
    <div
      className={className}
      style={error ? { pointerEvents: 'none', opacity: '0.2' } : null}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}

function Display(props) {
  const { error } = props
  // ${error ? `error` : null}`
  return (
    <div className={`display-wrapper ${error ? 'display-error' : null}`}>
      <div className="display-error-message">{error}</div>
      <div className="display-number">{props.children}</div>
    </div>
  )
}
