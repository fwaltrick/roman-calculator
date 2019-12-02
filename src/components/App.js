import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Main from './Main'
import '../styles.css'

function App() {
  return (
    <div className="main-container">
      <Header />
      <Main />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
