import React from 'react';
import logo from './logo.svg';
import Validation from './components/validation';
import Char from './components/char';
import './App.css';
import  { House, Person } from './components/personcard';
import classes from './styles.css';
import Radium from 'radium';
import color from 'color';
import AuthContext from './components/authContext'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      textLength: null,
      textArray: [],
      slice: [],
    }
  }

  removeItems = ( id, index ) => {
    console.log(index);
    console.log(id);
    // console.log(this.state.textArray.indexOf(this.state.textArray[id]));
    // console.log(Object.keys(index)[id]);
    if (this.state.textArray[id] == index ) {
      console.log(this.state.textArray[id]);
      this.setState({slice: this.state.textArray.splice(id,1)});
      this.setState({textArray: this.state.textArray});
      console.log(this.state.textArray);
    }

  }

  handleTextChange = (event) => {
      this.setState({inputText: event.target.value});
      this.state.textArray.push(...this.state.inputText);
      // console.log(this.state.textArray)
      this.setState({textLength: this.state.inputText.length});
      // console.log(this.state.inputText + this.state.inputText.length);
  }

  loginHandler = () => {
    // this.setState({ authenticated: true })
    console.log('hello')
  }

  render() {
    const styles = { 
        "house": { "normal": {
        backgroundColor: '#333',
        ':hover': {
          backgroundColor: '#999',
          color: '#000'
        }
      }
    }, "person": { "normal": {
      backgroundColor: '#888',
      ':hover': {
        backgroundColor: '#000',
        color: '#fff'
      }
    }
  } 
}
      
    return (
      <div>
        <div>
          <h1>Assignment 2 Instructions</h1>
            <input onChange={this.handleTextChange} placeholder="Stuff goes here" />
          <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }} >
            <House style1={styles.house} price="1 million dollars" stories="5" color="Blue" />
            <Person style2={styles.person} name="John Cena" title="Marine" age="40" /> 
          </AuthContext.Provider>
          <AuthContext.Consumer>
            {(context) => <button onClick={context.login}>Click Me</button>}
          </AuthContext.Consumer>
          <p>{this.state.textLength}</p>
          <Validation  length={this.state.textLength} />
          {this.state.textArray.map((index, i) => {
            // var key = index+i
            return <Char key={i} textReceived={index} removeItem={(index) => this.removeItems(i, this.state.textArray[i])} />
          })}
        </div>
      </div>

    )
  }
}

export default Radium(App);
