import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import Form from './components/form.js';
import axios from 'axios';

class App extends Component {
  state = {
    characters: [],
    edit: false
  };
  async componentDidMount() {
    await this.getData()
  }
  getData() {
    axios.get('http://localhost:5000/')
    .then((response)=> {
      // console.log(response)
      this.setState({
        characters: response.data
      })
    })
  }
  removeCharacter = (data,index) => {
    // console.log('data',data);
    // console.log('index',index)
    const { characters } = this.state;
    axios.delete('http://localhost:5000/delete',{data:data})
      .then(async (response)=> {
        this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
        });
      })
      .catch((err)=> {
        console.log(err)
      })
  }
  editCharacter = data => {
    this.setState({
      edit:true,
      editData: data
    })
  }
  handleSubmit = character => {
    if (this.state.edit) {
      console.log('inside edit',character)
      axios.post('http://localhost:5000/edit',character)
      .then(async (response)=> {
        this.setState({
          edit: false
        })
        await this.getData()
      })
      .catch((err)=> {
        console.log(err)
      })
    }
    else {
      this.setState({characters: [...this.state.characters, character]});
      axios.post('http://localhost:5000/add',character)
      .then((response)=> {
        console.log(response)
      })
      .catch((err)=> {
        console.log(err)
      })
    }
  }
  render() {
    if(this.state.edit) {
      return (
        <div className="container">
            <Form 
              handleSubmit={this.handleSubmit}
              editData={this.state.editData}
            />
        </div>
      );
    }else{
      return (
        <div className="container">
            <Table 
              characterData={this.state.characters}
              removeCharacter={this.removeCharacter}
              editCharacter={this.editCharacter}
            />
            <Form 
              handleSubmit={this.handleSubmit}
            />
        </div>
      );
    }
  }
}

export default App;
