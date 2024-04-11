import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { GiToken } from "react-icons/gi";

function GridComplexExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Formun default submit işlemini engelliyoruz

    try {
      const response = await axios.post("http://localhost:9090/api/login", {
        email: email,
        password: password,
      });

      if (response.data !== false) {
        setLoginStatus("Başarılı");
        localStorage.setItem('token', response.data);

        navigate("/contact"); // Başarılı olduğunda yönlendirme işlemi yapılır
      } else {
        setLoginStatus("Kullanıcı adı veya şifre hatalı");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginStatus("Hata");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}

export default GridComplexExample;
