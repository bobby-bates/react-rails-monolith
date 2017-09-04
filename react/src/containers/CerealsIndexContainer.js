import React, { Component } from 'react'
import CerealShowContainer from './CerealShowContainer'

class CerealsIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      cereals: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/cereals')
    .then(response => {
      debugger
      let parsed = response.json()
      return parsed
    }).then(cereals => {
      this.setState({ cereals: cereals})
    })
  }

  render(){


    return(
      <div>
        <h1>Hi from CerealsIndexContainer!</h1>
        <h2>{this.state.cereals}</h2>
      </div>
    )
  }
}

export default CerealsIndexContainer
