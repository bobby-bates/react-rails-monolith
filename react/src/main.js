import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// The $ is jquery, which runs this function whenever the page loads
$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
