import React, {Component} from 'react';
import {web3, contract} from './EthereumSetup';
import {
  Button
} from 'reactstrap';

class Entry extends Component {

    handleClick(i) {
        alert("Purchased Ticket Number: 500")
    }

    render() {
        return (
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
        )
    }
}

export default Entry;
