import React, { useState, useEffect } from 'react'
import { validateNumber, toRoman, toArabic } from '../utils/convert'
import Button from './Button'
import Display from './Display'

export default function Calculator() {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [curNum, setCurNum] = useState('')
  const [prevNum, setPrevNum] = useState('')
  const [result, setResult] = useState('')
  const [operator, setOperator] = useState('')

  // Data for rendering the buttons
  const numbersKeys = ['C', 'D', 'M', 'V', 'X', 'L', 'CE', 'I', '=']
  const operatorsKeys = ['+', '-', '×']

  const handleInput = val => {
    // To clean the display automatically if you start typing a number after an operation
    if (result && result === input) {
      setInput('')
    }
    setInput(prevInput => prevInput + val)
  }

  const clearInput = () => setInput('')

  // Input manipulation triggered after user click an operator
  const calculation = operator => {
    setPrevNum(input)
    setInput('')
    setOperator(operator)
  }

  const evaluate = () => {
    const prevArabic = toArabic(prevNum)
    const curArabic = toArabic(curNum)
    let operation

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
              testid="number"
              key={k}
              error={k !== 'CE' ? error : null}
              handleClick={
                k === 'CE' ? clearInput : k === '=' ? evaluate : handleInput
              }
              className={`button ${
                k === '=' || k === 'CE' ? 'utility' : 'number'
              } ${k === 'CE' ? 'ce' : ''}`}
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
              testid="operator"
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
