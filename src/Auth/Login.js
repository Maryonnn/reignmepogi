import '../Styles/Login.css';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
// import 'react-toastify/dist/ReactToastify.css';
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";

function Login(){
    return(
        <>
            <Navbar className="navbar">
                <div className='container'>
                    <Navbar.Brand>
                        <Image src="text-navigatu.png" width={200} height={50} fluid />
                    </Navbar.Brand>
                </div>
            </Navbar>
            <div className='container mt-5'>
                <Row>
                    <Col className="d-none d-md-block">
                        <Image src='navigatu.png' fluid />
                        <h1>Navigate to victory with us</h1>
                    </Col>
                    <Col>
                        <Card className={`mt-2 p-md-4 card-login`}>
                            <Card.Body>
                                <p className="text-muted">
                                    Login as :&nbsp;&nbsp; 
                                    <span className='fw-bold'>Sample user</span>
                                </p>
                                <div className="d-flex flex-wrap justify-content-around mb-3" id='floatLabel'>
                                    <Card className={'w-25 mb-3 card-active'}>
                                        <Card.Body>
                                            <div>
                                                <RiTeamFill size={25} />
                                                <p className="fw-bold d-none d-md-block">Personnel</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={'w-25 mb-3 card-active'}>
                                        <Card.Body>
                                            <div>
                                                <PiStudentFill size={25} />
                                                <p className="fw-bold d-none d-md-block">Incubatee</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={'w-25 mb-3 card-active'}>
                                        <Card.Body>
                                            <div>
                                                <PiChalkboardTeacherFill size={25} />
                                                <p className="fw-bold d-none d-md-block">Mentor</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <Form id="loginForm" noValidate>
                                    <InputGroup className="mb-3 mt-3">
                                        <FloatingLabel controlId="floatingInput" label="Email address">
                                            <Form.Control
                                                size="lg"
                                                type="email"
                                                placeholder="name@example.com"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a valid email address.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control
                                                size="lg"
                                                type="password"
                                                placeholder="Password"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a password.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </InputGroup>
                                    <Button 
                                        variant='primary' 
                                        className="login-button w-100 p-3 mb-3 fw-bold" 
                                    >
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div class="footer text-center p-5 mt-md-5">
                <p class="mb-0 text-muted">Navigatu TBI&nbsp; | &nbsp;Caraga State University - CCIS</p>
            </div>
        </>
    );
}

export default Login;