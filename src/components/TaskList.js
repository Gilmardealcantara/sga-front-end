import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Task from '../components/Task'

const API = 'http://localhost:8080/api/tasks';

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isLoading: false,
      error: null
    }
  }
  
  componentDidMount(){
    this.setState({isLoading: true});
    fetch(API, {method: 'get'})
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error('Erro ao conectar com o servidor ...');
        }
      })
      .then(data => {this.setState({tasks: data.reverse(), isLoading: false})})
      .catch(error => this.setState({error: error, isLoading: false}))
  }

  render() {
    const {tasks, isLoading, error } = this.state;
    
    if(error){
      return <p>{error.message}</p>
    }

    if(isLoading){
      return <p>Loading...</p>
    }
    
    return (
      <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example"> 
        <Tab eventKey={1} title="Todos">
          <ListGroup>
            {tasks.map(task => <Task status={task.status} key={task.id} content={task.content}/>)}
          </ListGroup> 
        </Tab>
        <Tab eventKey={2} title="Pendentes">
          <ListGroup>
            {tasks.map(task => 
              {if(!task.status)
                 return <Task status={2} key={task.id} content={task.content}/>
              }
            )}
          </ListGroup> 
        </Tab>
        <Tab eventKey={3} title="Feitos">
          <ListGroup>
            {tasks.map(task => 
              {if(task.status)
                 return <Task status={2} key={task.id} content={task.content}/>
              }
            )}
          </ListGroup> 
        </Tab>
      </Tabs>
    );
  }
}

export default TaskList;
