import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/AddShoppingCart'
import RemoveIcon from '@material-ui/icons/RemoveShoppingCart'

import './Produto.css'

class Produto extends Component {
  render() {
    return (
        <div className="produto">
            <span><b>{this.props.nome}</b></span>
            <span>R$ {this.props.valor}</span>
            <span>{this.props.quantidade}</span>
            <span className="aumentar" title="Aumentar quantidade" onClick={this.props.aumentar}>
                <AddIcon />
            </span>
            <span className="diminuir" title="Diminuir quantidade" onClick={this.props.diminuir}>
                <RemoveIcon />
            </span>
        </div>
    )
  }
}

export default Produto