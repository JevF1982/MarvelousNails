import React from "react";
import { MainButton, Hr, HeaderMain } from "../../Styles/ElementStyles";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
require("dotenv").config();

const FormSectionWrapper = styled.div`
  .form-control {
    margin: 10px;
  }
`;

function FormSection() {
  const onSubmit = (token) => {
    document.getElementById("demo-form").submit();
  };

  return (
    <FormSectionWrapper>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "90px 0 90px 0",
          }}
        >
          <HeaderMain>
            Drop me a line
            <Hr style={{ marginLeft: "150px" }} />
          </HeaderMain>
        </div>
        <Container>
          <Form>
            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                lg="6"
                md="6"
                xs="12"
              >
                <Form.Control type="text" placeholder="Your Name*" required />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                lg="6"
                md="6"
                xs="12"
              >
                <Form.Control
                  type="email"
                  placeholder="Email Address*"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                lg="6"
                md="6"
                xs="12"
              >
                <Form.Control type="text" placeholder="Phone Number" required />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                lg="6"
                md="6"
                xs="12"
              >
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="6" placeholder="Your Message" />
            </Form.Group>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "50px 0 90px 0 ",
              }}
            >
              <MainButton
                className="g-recaptcha"
                data-sitekey={process.env.REACT_APP_CAPTCHAKEY}
                data-callback={onSubmit}
                data-action="submit"
              >
                Submit
              </MainButton>
            </div>
          </Form>
        </Container>
      </div>
    </FormSectionWrapper>
  );
}

export default FormSection;
