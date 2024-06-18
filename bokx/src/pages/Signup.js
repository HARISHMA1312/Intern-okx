
import React, { useState } from 'react';
import Navv from './Navv';
import { Col, Container, Row,  Form, Button } from 'react-bootstrap';
import BlackCol from './BlackCol';
import axios from 'axios'
import PopDel from './PopDel';
import {Formik,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'


/*
export default function Signup() {
  const countries = ['India', 'France', 'USA', 'UK', 'Nepal'];
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className='signup-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col className='blk-col' xs={12} md={6}>
            <BlackCol />
          </Col>
          <Col className='white-col' xs={12} md={6}>
            <div className='signup-container'>
              <h2>Let's get you started</h2>
              <h6>Select the country/region that exactly matches the one on your ID or proof of address</h6>

              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>Country or region of residence</Form.Label>
                  <Dropdown onSelect={handleCountryChange} className='country-code-dropdown'>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      {selectedCountry}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {countries.map((country, index) => (
                        <Dropdown.Item key={index} eventKey={country}>
                          {country}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>

                {}
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Confirm password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Confirm password" 
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className='mb-3' controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label={
                      <span style={{ color: 'grey' }}>
                        By creating an account, I agree to{' '}
                        <u onClick={() => window.location.href = '/terms-and-conditions'}>
                          OKX Terms of Service, Risk and Compliance, and privacy policy statements
                        </u>
                      </span>
                    }
                    checked={agreed}
                    onChange={handleCheckboxChange}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className='w-100 signup-btn' 
                  disabled={!agreed}
                  style={{ backgroundColor: agreed ? 'blue' : 'grey', borderColor: agreed ? 'blue' : 'grey' }}
                >
                  Next
                </Button>
                
              </Form>
            </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
*/





export default function Signup() {
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Confirm, setConfirmpassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const[showPopUp,setshowPopUp] =  useState(false);


  const postValue=()=>{
    axios.post(


      
      'https://666fc1610900b5f872481ed7.mockapi.io/Signup',
  {
      email,
      password,
      Confirm
  });
  console.log(email);
  console.log(password);
  console.log(Confirm);
  alert(email);
  };
  const togglePop = () => {
      setShowPop(!showPop);
    };
  
    const closePop = () => {
      setShowPop(false);
    };
    const [showPop, setShowPop] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className='signup-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col className='blk-col' xs={12} md={6}>
            <BlackCol />
          </Col>
          <Col className='white-col' xs={12} md={6}>
            <div className='signup-container'>
              <h2>Let's get you started</h2>
              

              <Form>
                

                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                
                </Form.Group>

                {}
                <Row>
                  <br/>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Confirm password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Confirm password" 
                        value={Confirm}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </Form.Group>
                    <br/>
                  </Col>
                </Row>

                <Form.Group className='mb-3' controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label={
                      <span style={{ color: 'grey' }}>
                        By creating an account, I agree to{' '}
                        <u >
                          OKX Terms of Service, Risk and Compliance, and privacy policy statements
                        </u>
                      </span>
                    }
                    checked={agreed}
                    onChange={handleCheckboxChange}
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className='w-100 signup-btn' 
                  disabled={!agreed}
                  onClick={postValue}
                  style={{ backgroundColor: agreed ? 'blue' : 'grey', borderColor: agreed ? 'blue' : 'grey' }}
                >
                  Next
                </Button>
                <br/>
                <br/>
                <p className='text-center dont-have-account'>
                                Have an account? <span className='signup-link' onClick={() => window.location.href = '/login'}>Login</span>
                            </p>
                <p onClick={togglePop} className='fp-p'>Delete Account</p>
                
              </Form>
              {showPop && <PopDel onClose={closePop} />}
            </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}


/*

export default function Signup() {
  const [showPop, setShowPop] = useState(false);

  const togglePop = () => {
    setShowPop(!showPop);
  };

  const closePop = () => {
    setShowPop(false);
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'passwordord must be at least 8 characters').required('passwordord is required'),
    Confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'passwordords must match')
      .required('Confirm passwordord is required'),
    agreed: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
  });

  const handleSubmit = (values) => {
    axios.post('https://666fc1610900b5f872481ed7.mockapi.io/Signup', values)
      .then(response => {
        console.log('Signup Successful', response.data);
        alert('Signup Successful');
      })
      .catch(error => {
        console.log('Signup Failed', error);
        alert('Signup Failed');
      });
  };

  return (
    <div className='signup-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col className='blk-col' xs={12} md={6}>
            <BlackCol />
          </Col>
          <Col className='white-col' xs={12} md={6}>
            <div className='signup-container'>
              <h2>Let's get you started</h2>

              <Formik
                initialValues={{ email: '', password: '', Confirm: '', agreed: false }}
                validationSchema={signupSchema}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Field
                        className='form-control'
                        type="email"
                        name="email"
                        placeholder="Enter email"
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </Form.Group>

                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>passwordord</Form.Label>
                          <Field
                            className='form-control'
                            type="passwordord"
                            name="password"
                            placeholder="Enter passwordord"
                          />
                          <ErrorMessage name="password" component="div" className="text-danger" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Confirm passwordord</Form.Label>
                          <Field
                            className='form-control'
                            type="passwordord"
                            name="Confirm"
                            placeholder="Confirm passwordord"
                          />
                          <ErrorMessage name="Confirm" component="div" className="text-danger" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className='mb-3' controlId="formBasicCheckbox">
                      <Field
                        type="checkbox"
                        name="agreed"
                        className="form-check-input"
                      />
                      <Form.Label className="form-check-label">
                        By creating an account, I agree to{' '}
                        <u>OKX Terms of Service, Risk and Compliance, and privacy policy statements</u>
                      </Form.Label>
                      <ErrorMessage name="agreed" component="div" className="text-danger" />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className='w-100 signup-btn'
                      disabled={isSubmitting || !agreed}
                      style={{ backgroundColor: agreed ? 'blue' : 'grey', borderColor: agreed ? 'blue' : 'grey' }}
                    >
                      Next
                    </Button>

                    <p className='text-center dont-have-account'>
                      Have an account? <span className='signup-link' onClick={() => window.location.href = '/login'}>Login</span>
                    </p>

                    <p onClick={togglePop} className='fp-p'>Delete Account</p>
                  </Form>
                )}
              </Formik>

              {showPop && <PopDel onClose={closePop} />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

*/