import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import swal from 'sweetalert';

class Task extends Component {
  
	deleteTask(task_id) {
  	return fetch('/api/tasks/' + task_id, {
    	method: 'delete'
  	})
  	.then(response => response.json());
	}
  
  taskClick(){
   	swal({
			title: "Tem certeza que deseja deletar a tarefa?",
			text: this.props.content,
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
       	if(this.deleteTask(this._reactInternalFiber.key))
					swal("Pronto! Tarefa deletada com sucesso!", {icon: "success"});
				else
					swal("Pronto! Erro no servidor!", {icon: "danger"});
			} 
		}); 
  }

  render(){
    let st = this.props.status;
    switch(st){
      case 0:
        st = "warning"; break
      case 1:
        st = "success"; break;
      case 2:
        st = "info"; break
      default:break;
    }
    return(
      <ListGroupItem bsStyle={st}>{this.props.content}
        <Glyphicon 
          onClick={this.taskClick.bind(this)} 
          glyph="remove" 
          style={{"float":"right"}}/>
      </ListGroupItem>
    );
  }
}

export default Task;
