import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import {Container} from 'reactstrap';
import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table
} from "reactstrap";
import {web3, contract} from './EthereumSetup.js';
import data from './data.json';
import Entry from './Entry';


class App extends Component {

  createEntry(entry) {
    return <Entry name={entry} key={entry} />;
  };

  // calls createEntry as many times as it needs
  createEntries(entries) {
      return entries.events.map(this.createEntry);
  };

  createEvent() {
    var hex = web3.utils.stringToHex("Gary's Birthday Party");
    contract.methods.createEvent(hex, 500, 1).send({from: "0x0C10922A476917e024ba0817322C7636eD62f1D1"}).then(function (receipt) {
      alert(receipt)
    });
    alert("Event #160 successfully created!")
  }
  validateTicket() {
    alert("Ticket ID 500: VALID")
  }

  render() {
    return (
      <div className="app-bg">
        <Header/>
        <div className = "app-body">
          <main className="main">
            <Container fluid>
                   <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Upcoming Events
                            </CardHeader>
                            <CardBlock>
                              <Button color="success" onClick = {this.createEvent}style= {{margin: "5px"}}> Create Event </Button>
                              <Button color="danger " onClick = {this.validateTicket} style= {{margin: "5px"}}> Validate Ticket </Button>
                               <Table striped hover responsive className="table-outline mb-0 d-none d-sm-table">
                                    <thead className="thead-default">
                                        <tr>
      
                                            <th className="text-center"><i className= "icon-shield"></i></th>
                                            <th>Event</th>
                                            <th className="text-center">ID</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-center">Buy</th>
                                        </tr>

                                        <tr>
            
              <td className="text-center">
                <div className="avatar">
                  <img src={'img/logo.png'} className="img-avatar"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </td>
            
              <td>
                <div>
                  Gary's Birthday Party
                </div>
                <div className="small text-muted">
                  Address: 61c61616161c
                </div>
              </td>
            
              <td className="text-center">
                <div>170</div>
              </td>
             
              <td className="text-center">
                <div>5000 ETH</div>
              </td>
            
              <td className="text-center">
                <div>Sold Out</div>
              </td>
              
              <td className="text-center">
                <Button onClick={this.handleClick} color="secondary">Purchase</Button>
              </td>
            
          </tr>
                                    </thead>
                                    <tbody>
                                      {this.createEntries(data)}
                                    </tbody>
                                </Table>
                            </CardBlock>
                            </Card>
                        </Col>
                </Row>
            </div>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
