// @flow

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';
import Navi from '../Nav/Navi';
import SearchYT from '../SearchYT/SearchYT';
import Counter from '../Counter/Counter';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Navi />
        <Container className="App-intro">
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/youtube-search" render={() => <SearchYT title="Search YT here" />} />
            <Route render={() => "Not found"} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
