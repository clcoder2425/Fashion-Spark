//Importing React
import React from "react";
//Importing MDBReactUI
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Styles/footer.css?inline";

function Footer() {
  return (
//Footer with social media links
    
    // <footer className=" wrapper bg-dark text-center text-white fixed-bottom">
      <MDBContainer className= "wrapper" >
        <MDBRow>
          <MDBCol>
            <MDBRow className="footer-el justify-content-center">
              <MDBCol size="auto" className="me-3">

                <a href="https://twitter.com/Carmen_SanDieg1" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                  <MDBIcon fab icon="twitter" size="2x" />
                  <span className="d-block">Twitter</span>
                </a>
              </MDBCol>
              <MDBCol size="auto" className="me-3">
                <a href="https://github.com/clcoder2425" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                  <MDBIcon fab icon="github" size="2x" style={{ color: '#FFFFFF' }}/>
                  <span className="d-block">GitHub</span>
                </a>
              </MDBCol>
              <MDBCol size="auto">
                <a href="www.linkedin.com/in/carmen-luisa-jimenez-b78b3813" target="_blank" rel="noopener noreferrer" className="text-white">
                  <MDBIcon fab icon="linkedin" size="2x" style={{ color: '#0077b5' }} />
                  <span className="d-block">LinkedIn</span>
                </a>
              </MDBCol>
            </MDBRow>
            <h6>Fashion Spark</h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    // </footer>
  );
};
export default Footer;