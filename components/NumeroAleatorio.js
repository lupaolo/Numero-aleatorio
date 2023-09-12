import React, { Component } from 'react';

class NumeroAleatorio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroAleatorio: null
    };
  }

  gerarNumeroAleatorio = () => {
    const { min, max } = this.props;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ numeroAleatorio });
  };

  render() {
    return (
      <div>
        <button onClick={this.gerarNumeroAleatorio}>Gerar Número Aleatório</button>
        {this.state.numeroAleatorio !== null && (
          <p>Número Aleatório: {this.state.numeroAleatorio}</p>
        )}
      </div>
    );
  }
}

export default NumeroAleatorio;
