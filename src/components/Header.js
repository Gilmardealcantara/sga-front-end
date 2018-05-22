import React, { Component } from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import { ControlLabel, HelpBlock } from 'react-bootstrap';
import swal from 'sweetalert';

const API = 'http://localhost:8080/api/tasks';

class Header extends Component {
  
 constructor(props, context){
    super(props, context);
    
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);

    this.state = {
      new_task: ''
    }
  }
	
	addTask(){
    
		if(this.state.new_task === '') return;

    console.log(this.state.new_task)
    fetch(API, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
		 	body: JSON.stringify({content:this.state.new_task, status:0})
		})
		.then(response => { 
      if(!response.ok)
					swal("Tarefa não adicionada! Erro no servidor!", {icon: "warning"});
    })
		this.setState({ new_task: '' });
	}

  getValidationState() {
    const length = this.state.new_task.length;
    if (length > 5) return 'success';
    else if (length > 2) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ new_task: e.target.value });
  }

  render() {
    return (
      <form onSubmit={ e => { this.addTask(); e.preventDefault(); }}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Adicionar Tarefa</ControlLabel>
          <FormControl
            type="text"
            value={this.state.new_task}
            placeholder="Oque precisa ser feito"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

export default Header;
