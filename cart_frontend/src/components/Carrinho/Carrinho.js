import React, { Component } from 'react'
import PopUp from '../PopUp/PopUp'
import Botao from '../Botao/Botao'
import Produto from '../Produto/Produto'

import './Carrinho.css'

class Carrinho extends Component {
    state = {
        produtos: [],
        valorTotal: 0,
    }

    componentDidMount = () => {
        this.renderizarCarrinho()
    }

    renderizarCarrinho = async () => {
        await fetch('http://localhost:8000/api/listar-produtos')
              .then(resposta => resposta.json())
              .then(produtos => {
                  this.setState({ produtos })
              })

        let valorTotal = 0
        this.state.produtos.forEach(produto => valorTotal += (produto.valor * produto.quantidade))
        this.setState({ valorTotal })
    }

    aumentarQuantidade = async id => {
        await fetch(`http://localhost:8000/api/aumentar-quantidade/${id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.mensagem !== undefined) alert(dados.mensagem)
        })
        this.renderizarCarrinho()
    }

    diminuirQuantidade = async id =>  {
        await fetch(`http://localhost:8000/api/diminuir-quantidade/${id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.mensagem !== undefined) alert(dados.mensagem)
        })

        this.renderizarCarrinho()
    }

    adicionarProduto = async evento =>{
        evento.preventDefault()

        let inputNome = document.querySelector('#nomeProduto')
        let inputValor = document.querySelector('#valorProduto')

        let formData = new FormData()
        formData.append('nome', inputNome.value)
        formData.append('valor', inputValor.value)

        await fetch('http://localhost:8000/api/adicionar-produtos', {
            method: 'post',
            body: formData
        }).then(resposta => console.log(resposta.json()))

        inputNome.value = ''
        inputNome.focus()
        inputValor.value = ''

        this.renderizarCarrinho()
    }

    limparProdutos = async evento => {
        evento.preventDefault()

        await fetch('http://localhost:8000/api/deletar-produtos', {
            method: 'delete'
        }).then(resposta => console.log(resposta.json()))

        this.renderizarCarrinho()
    }

    render() {
        return (
            <div className="carrinho">
                <div className="carrinho-header">
                    <form action="" onSubmit={this.adicionarProduto}>
                        <div className="inputs">
                            <input id="nomeProduto" type="text" placeholder="Nome do produto" />
                            <input id="valorProduto" type="tel" placeholder="Valor do produto"/>
                        </div>
                        <div className="botoes">
                            <Botao
                                className="adicionar"
                                onClick={this.adicionarProduto}
                                text="Adicionar Produto"
                            />
                            <PopUp
                                valorTotal={this.state.valorTotal}
                            />
                        </div>
                        <Botao
                            className="limpar"
                            onClick={this.limparProdutos}
                            text="Limpar produtos"
                        />
                    </form>
                </div>
                {this.state.produtos.map(produto => (
                    <Produto
                        key={produto.id}
                        nome={produto.nome}
                        valor={produto.valor}
                        quantidade={produto.quantidade}
                        aumentar={() => this.aumentarQuantidade(produto.id)}
                        diminuir={() => this.diminuirQuantidade(produto.id)}
                    />
                ))}
            </div>
        )
    }
}

export default Carrinho
