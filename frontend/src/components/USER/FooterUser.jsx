import React from 'react';
import {
  MDBFooter
} from 'mdb-react-ui-kit';

function FooterUser() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          ICTAK JobPortal
        </a>
      </div>
    </MDBFooter>
  );
}
export default FooterUser;