import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import TaskList from './components/TaskList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
     return (
      <div className="App">
        <Grid>
          <Row>
            <Col style={{"padding":"10px"}} md={7} mdOffset={2}>
              <Header/>
            </Col>
          </Row>
          <Row>
            <Col md={7} mdOffset={2}>
              <TaskList/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
