import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import swal from 'sweetalert';

import Header from '../components/Header';
import TaskList from '../components/TaskList';

const API = 'http://localhost:8080/api/tasks';

class View extends Component {
  constructor(props){
    super(props);
    this.sendDataApi = this.sendDataApi.bind(this);
    this.state = {
      tasks: [],
      isLoading: false,
      error: null
    }
  }
  
	sendDataApi(new_task){    
    fetch(API, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
		 	body: JSON.stringify({content: new_task, status:0})
		})
		.then(response => { 
      if(response.ok){
			  return response.json()
      }else{
        swal("Tarefa não adicionada! Erro no servidor!", {icon: "warning"});
      }
    })
    .then(task => {
      let new_list = this.state.tasks;
      new_list.unshift(task)
      this.setState({tasks: new_list});
    })
	}

  fetchDataApi(){
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

  componentDidMount(){
    this.fetchDataApi();
  }


  render() {
     return (
      <div className="App">
        <Grid>
          <Row>
            <Col style={{"padding":"10px"}} md={7} mdOffset={2}>
              <Header send={this.sendDataApi}/>
            </Col>
          </Row>
          <Row>
            <Col md={7} mdOffset={2}>
              <TaskList data={this.state}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default View;
