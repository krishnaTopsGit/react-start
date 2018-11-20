import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import Form from './components/form.js';

class App extends Component {
  state = {
      characters: [
        {
            'name': 'Charlie1111',
            'job': 'Janitor'
        },
        {
            'name': 'Mac',
            'job': 'Bouncer'
        },
        {
            'name': 'Dee',
            'job': 'Aspring actress'
        },
        {
            'name': 'Dennis',
            'job': 'Bartender'
        }
    ]        
  };
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
        characters: characters.filter((character, i) => { 
            return i !== index;
        })
    });
  }
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <div className="container">
          <Table 
            characterData={this.state.characters}
            removeCharacter={this.removeCharacter}
          />
          <Form 
            handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}

export default App;
