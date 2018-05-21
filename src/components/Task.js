import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

class Task extends Component {
  render(){
    let st = this.props.status;
    switch(st){
      case 0:
        st = "warning"; break
      case 1:
        st = "success"; break;
      case 2:
        st = "info"; break
    }
    return(
      <ListGroupItem bsStyle={st}>{this.props.content}
        <Glyphicon glyph="remove" style={{"float":"right"}}/>
      </ListGroupItem>
    );
  }
}

export default Task;
