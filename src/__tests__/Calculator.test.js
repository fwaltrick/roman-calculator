import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../components/Calculator'
import { render, cleanup, queryAllByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup)

describe('<Calculator/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calculator />, div)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('has 9 buttons in the numbers keyboard', () => {
    const { queryAllByTestId } = render(<Calculator />)
    expect(queryAllByTestId('number').length).toBe(9)
  })

  it('has 3 operator buttons', () => {
    const { queryAllByTestId } = render(<Calculator />)
    expect(queryAllByTestId('operator').length).toBe(3)
  })
})
