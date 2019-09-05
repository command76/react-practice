import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import logo from './logo.svg';
import './App.css';
import classes from './css/styles1.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={classes.background}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
  );
  }
}

export default App;
