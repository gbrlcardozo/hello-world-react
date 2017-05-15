import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {texto: "Texto"};
  }
  changeInput(event){
    var value = event.target.value
    this.setState({texto: value});
  }
  render() {
    return <div><h1>World</h1><br/><input type="text" onChange={this.changeInput.bind(this)}></input><br/><br/>Resultado:<b>{this.state.texto}</b></div>
  }
}

ReactDOM.render(<World/>, document.getElementById('world'));
