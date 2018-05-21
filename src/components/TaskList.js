import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import Task from '../components/Task'

class TaskList extends Component {
  render() {
     return (
      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example"> 
        <Tab eventKey={1} title="Todos">
          <ListGroup>
          <Task state={1} content="COMPLETAR DESAFIO"/>
          <Task state={0} content="PENSAR E ANALIZAR"/>
          <Task state={0} content="ESTADO DA ARTE"/>
          <Task state={0} content="PESQUISAR"/>
          </ListGroup> 
        </Tab>
        <Tab eventKey={2} title="Pendentes">
          <ListGroup>
          <Task state={0} content="PENSAR E ANALIZAR"/>
          <Task state={0} content="ESTADO DA ARTE"/>
          <Task state={0} content="PESQUISAR"/>
          </ListGroup> 
        </Tab>
        <Tab eventKey={3} title="Feitos">
          <ListGroup>
          <Task state={1} content="COMPLETAR DESAFIO"/>
          </ListGroup> 
        </Tab>
      </Tabs>
    );
  }
}

export default TaskList;
