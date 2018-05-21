import React, { Component } from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
      <Form>
        <FormGroup controlId="formTask">
        <FormControl type="text" placeholder="O que precisa ser feito?" />
        </FormGroup>{' '}
        <Button type="submit">Adicionar Tarefa</Button>
      </Form>
    );
  }
}

export default Header;
