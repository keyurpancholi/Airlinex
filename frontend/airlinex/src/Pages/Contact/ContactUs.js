import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/navbar";
// import { contactConfig } from "./content_option"

// export default function ContactUs() {
const ContactUs = () => {
  
  const Wrap = styled.section`
    padding: 2rem 0 2rem 0;
  `;
  const Wrapper = styled.section`
    padding: 0 0 0 2rem;
  `;
  return (
    <>
    <Navbar />
    <Container>
    <Wrapper><Row className="mb-1 mt-1">
      <Col lg="8">
        <h1 className="display-5 mb-4">Contact Us</h1>
        <hr className="t_border my-0 ml-0 text-left" />
      </Col>
    </Row></Wrapper>
    
    <Wrap><iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6460492262922!2d72.833926714852!3d19.123177587060866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1665425928495!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">

    </iframe></Wrap>

          <Row className="sec_sp">
            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4"><b>Registered Office</b></h3>
              <address>
                <strong>Email:</strong>{" 'airlinex@gmail.com' "}

                <br />
                <br />
                <p>
                  <strong>Phone:</strong> (555)490-4568
                </p>
                
              </address>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.</p>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>

            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4"><b>Customer Support</b></h3>
              <address>
                <p>India : 0124-6173838, 0124-4973838</p>
                <p>China : +86-4006063838</p>
                <br />
                <br />
                <p>
                  <strong>Phone: </strong>(555)123-4568
                </p>
                
              </address>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quisquam vel fugit odio veniam veritatis! Voluptatum autem soluta eos reprehenderit.
              </p>
            </Col>
          </Row>
        </Container></>
  );
}
export default ContactUs;
