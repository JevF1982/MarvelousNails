import React, { useState } from "react";
import { MainButton, Hr, HeaderMain } from "../../Styles/ElementStyles";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";

function FormSection() {
  const [FormValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    isSent: false,
    isNotSent: false,
    fieldCheck: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const service_id = "default_service";
    const template_id = "template_DRR7N90x";
    const user_id = process.env.REACT_APP_USERID;

    if (
      FormValues.name === "" ||
      FormValues.email === "" ||
      FormValues.phone === "" ||
      FormValues.message === ""
    ) {
      setFormValues({ ...FormValues, fieldCheck: true });
      setTimeout(() => {
        setFormValues({ ...FormValues, fieldCheck: false });
      }, 3000);
    } else {
      emailjs.send(service_id, template_id, FormValues, user_id).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          if (response.status === 200) {
            setFormValues({
              isSent: true,
              name: "",
              email: "",
              subject: "",
              message: "",
              fieldCheck: false,
            });
          }
        },
        (err) => {
          setFormValues({ ...FormValues, isNotSent: true });
          console.log("FAILED...", err);
        }
      );
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...FormValues, [e.target.name]: e.target.value });
  };

  const confirmationText = () => {
    if (FormValues.isSent) {
      setTimeout(function () {
        setFormValues({ ...FormValues, isSent: false });
      }, 3000);
      return (
        <Alert style={{ marginLeft: "20px" }} variant="success">
          Message Sent
        </Alert>
      );
    } else if (FormValues.isNotSent) {
      setTimeout(function () {
        setFormValues({ ...FormValues, isNotSent: false });
      }, 3000);
      return (
        <Alert style={{ marginLeft: "20px" }} variant="danger">
          Failed to send message
        </Alert>
      );
    }
  };

  return (
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
      {FormValues.fieldCheck && (
        <Alert variant="info" style={{ margin: "10px 0 10px 0" }}>
          {" "}
          Please fill in all fields
        </Alert>
      )}
      <Container>
        <Form id="main-form" data-netlify-recaptcha="true" data-netlify="true">
          <Form.Row>
            <Form.Group
              as={Col}
              controlId="formGridEmail"
              lg="6"
              md="6"
              xs="12"
            >
              <Form.Control
                type="text"
                placeholder="Your Name*"
                required
                value={FormValues.name || ""}
                name="name"
                onChange={handleChange}
              />
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
                value={FormValues.email || ""}
                name="email"
                onChange={handleChange}
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
              <Form.Control
                type="text"
                placeholder="Phone Number"
                required
                value={FormValues.phone || ""}
                name="phone"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridPassword"
              lg="6"
              md="6"
              xs="12"
            >
              <Form.Control
                type="text"
                placeholder="Subject"
                value={FormValues.subject || ""}
                name="subject"
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="6"
              placeholder="Your Message"
              value={FormValues.message || ""}
              name="message"
              onChange={handleChange}
            />
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
              dataCallback={onSubmit}
              data-action="submit"
              onClick={onSubmit}
            >
              Submit
            </MainButton>
            {confirmationText()}
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default FormSection;
