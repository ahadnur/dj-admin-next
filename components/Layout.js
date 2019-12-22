import Navbar from './Navbar';
import {  MDBContainer } from "mdbreact";

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <MDBContainer>
          {this.props.children}
        </MDBContainer>
      </React.Fragment>
    )
  }
}
