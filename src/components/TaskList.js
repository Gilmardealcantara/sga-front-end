import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Task from '../components/Task'


class TaskList extends Component {
  
  render() {
    const {tasks, isLoading, error } = this.props.data;
    
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
