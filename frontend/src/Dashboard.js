import React, {Component} from "react";
import {
  Badge,
  Button,
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBlock,
  Form,
  FormGroup,
  Input,
  NavLink,
  Table
} from "reactstrap";


class Dashboard extends Component {

  constructor(props) {
    super(props);
//     web3.eth.getAccounts((error, accounts) => {
//     if (error) {
//       console.log(error)
//       return
//     }
//       web3.eth.defaultAccount = accounts[0];
// });
  }

  render() {

    return (
     <div className="animated fadeIn">
      <Row>
          <Col>
              <Card>
                  <CardHeader>
                      Your Items
                  </CardHeader>
                  <CardBlock>
                  
                     <Table striped hover responsive className="table-outline mb-0 d-none d-sm-table">
                          <thead className="thead-default">
                              <tr>
                                  <th className="text-center"><i className= "icon-shield"></i></th>
                                  <th>Events</th>
                                  <th className="text-center">ID</th>
                                  <th className="text-center">Price</th>
                                  <th className="text-center">Status</th>
                                  <th className="text-center">Buy</th>
                              </tr>

                          </thead>
                          <tbody>
                            <tr>
                  
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/logo.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                  
                    <td>
                      <div>
                      {this.props.name}
                      </div>
                      <div className="small text-muted">
                        Address: 3456ujnbgytyuoiekmnbhuasfdoiuiyu8
                      </div>
                    </td>
                  
                    <td className="text-center">
                      <div>128</div>
                    </td>
                   
                    <td className="text-center">
                      <div>0.10 ETH</div>
                    </td>
                  
                    <td className="text-center">
                      <div>For Sale</div>
                    </td>
                    
                    <td className="text-center">
                      <Button onClick={this.handleClick} color="primary">Purchase</Button>
                    </td>
                  
                  </tr>
                          </tbody>
                      </Table>
                  </CardBlock>
                  </Card>
              </Col>
      </Row>
  </div>
    )
  }
}

export default Dashboard;
