import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
      <Row>
        <Col style={{"padding":"10px"}} md={6} mdOffset={2}>
	      <Form >
	       <FormGroup controlId="formTask">
	     	<FormControl type="text" placeholder="O que precisa ser feito?" />
	       </FormGroup>{' '}
	      </Form>
	     </Col>
        <Col style={{"padding":"10px"}} md={1}>
		  <Button type="submit">Adicionar Tarefa</Button>
        </Col>
      </Row>
      <Row>
        <Col md={7} mdOffset={2}>
		  <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example"> 
		    <Tab eventKey={1} title="Todos">
       	      <ListGroup>
                <ListGroupItem bsStyle="warning">T1
                  <Glyphicon glyph="remove" style={{"float":"right"}}/>
				</ListGroupItem>
				<ListGroupItem bsStyle="success">T2
                  <Glyphicon glyph="remove" style={{"float":"right"}}/>
				</ListGroupItem>
                <ListGroupItem bsStyle="warning">T3
                  <Glyphicon glyph="remove" style={{"float":"right"}}/>
				</ListGroupItem>
              </ListGroup> 
		    </Tab>
		    <Tab eventKey={2} title="Pendentes">
       	      <ListGroup>
                <ListGroupItem bsStyle="warning">T1
                  <Glyphicon glyph="remove" style={{"float":"right"}}/>
				</ListGroupItem>
                <ListGroupItem bsStyle="warning">T3
                  <Glyphicon glyph="remove" style={{"float":"right"}}/>
				</ListGroupItem>
              </ListGroup> 
		    </Tab>
		    <Tab eventKey={3} title="Feitos">
       	      <ListGroup>
                <ListGroupItem bsStyle="success">T2
                  <Glyphicon glyph="remove" style={{"float":"right"}}/>
				</ListGroupItem>
              </ListGroup> 
		    </Tab>
		  </Tabs>
		</Col>
      </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
