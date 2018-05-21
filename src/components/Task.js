import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

class Task extends Component {
  render(){
    const st = this.props.state ? "success" : "warning";
    return(
      <ListGroupItem bsStyle={st}>{this.props.content}
        <Glyphicon glyph="remove" style={{"float":"right"}}/>
      </ListGroupItem>
    );
  }
}

export default Task;
