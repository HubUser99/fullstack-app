import React, { Component } from 'react';

import history from '../tools/history.js';
import { Router } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from './Container.js';
import Menu from './Menu.js';
import Footer from './Footer.js';

import '../style/App.css';

const styles = theme => ({
  root: {
    ...theme.typography,
  },
});

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
          <Router history={ history }>
            <div>
              <Menu />
              <Container />
              <Footer />
            </div>
          </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
