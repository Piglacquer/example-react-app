import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

class App extends Component {
  //constructor only holds super(props), this.state
  constructor(props){
    super(props)
    this.state = {
      name: 'Jed',
      color: 'blue',
      data: []
    }
  }

  //function to get the data and put the data in state
  getTheData = () => {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/10')
      .then(response => response.json())
      .then(response => this.setState({data: response}))
  }

  //run function to get data when component is mounted
  //lifecycle method
  componentDidMount(){
    this.getTheData()
  }

  //render is what you see on the screen
  //has to have a return
  render() {
    console.log(this.state.data, 'app state')
    return (
      <div className="App">
        <Header />
        <button onClick={this.getTheData}>NEW QUOTES, PLEASE</button>
        {/* passing data to list component */}
        <List quotes={this.state.data}/>
        <h1>{this.state.number}</h1>
        <Footer />
      </div>
    );
  }
}

export default App;

