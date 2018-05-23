import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import image from '../logo.svg';

class Task extends Component {
   
  taskClick(){
    this.props.delete(this._reactInternalFiber.key)
  }

  render(){
    let st = this.props.status;
    let style_st;
    switch(st){
      case 0:
        style_st = "warning"; break
      case 1:
        style_st = "success"; break;
      case 2:
        style_st = "info"; break
      default:break;
    }
    return(
      <ListGroupItem bsStyle={style_st}>
        <Glyphicon 
          onClick={this.taskClick.bind(this)} 
          glyph="remove" 
          style={{"float":"right"}}/>
					{st ? (
            <Collapsible trigger={this.props.content}>
					    <img src={image} width={240} height={240}/>
            </Collapsible>) : (this.props.content)
          }
      </ListGroupItem>
    );
  }
}

export default Task;
