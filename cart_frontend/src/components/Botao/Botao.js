import React, { Component } from 'react'

import './Botao.css'

class Botao extends Component {
  render() {
    return (
        <button className={this.props.className} onClick={this.props.onClick}>
          {this.props.text}
        </button>
    )
  }
}

export default Botao
