import React from 'react';
import Link from 'next/link';
import { MDBCard, MDBIcon,  MDBCol} from 'mdbreact';

const Card = (props) => (
  <React.Fragment>
    <MDBCol xl="2" md="6">
      <MDBCard className="text-center" color="#d0d6e2 mdb-color lighten-5">
        <div className="mt-3">
          <Link href={props.link}>
            <MDBIcon icon={props.icon} size="4x"/>
          </Link>
            <div className="data">
              <Link href={props.link}>
                <p>{props.data}</p>
              </Link>
            </div>
        </div>
      </MDBCard>
    </MDBCol>
  </React.Fragment>
);

export default Card;