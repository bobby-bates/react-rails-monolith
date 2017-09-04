import React, { Component } from 'react'

class CerealShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      cereals: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/cereals')
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(cereals => {
      this.setState({ cereals: cereals})
    })
  }

  render(){


    return(
      <h1>Hi from CerealShowContainer!</h1>
    )
  }
}

export default CerealShowContainer
