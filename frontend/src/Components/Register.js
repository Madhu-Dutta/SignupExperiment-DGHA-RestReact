import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            UserName: '',
            //Validation checks
            errors: {
                fullName: '',
                email: '',
                password: '',
            }
        }
    }

    Email = (e) => {
        this.setState({
            Email: e.target.value
        })
    }
    Password = (e) => {
        this.setState({
            Password: e.target.value
        })
    }
    UserName = (e) => {
        this.setState({
            UserName: e.target.value
        })
    }
    FirstName = (e) => {
        this.setState({
            FirstName: e.target.value
        })
    }
    LastName = (e) => {
        this.setState({
            LastName: e.target.value
        })
    }

    register = (e) => {

        e.preventDefault();
        fetch('http://localhost:52575/Api/login/InsertMember', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                UserName: this.state.UserName,
                Password: this.state.Password,
                Email: this.state.Email,
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status === 'Success') {
                    this.props.history.push("/");
                }
                else {
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!');
                }
            })
    }


    render() {
        return (
            <Container>
                <div className="wrapper">
                    <div className="header">
                        <h2 className="text-center">Register</h2>
                        <hr />
                    </div>
                    <div className="msg-block"></div>

                    <Form name="form" onSubmit={this.register}>
                        <FormGroup>
                            <Row>
                                <Col xs="6">
                                    <Input type="text" className="form-control" onChange={this.FirstName} placeholder="FirstName" required />
                                </Col>
                                <Col xs="6">
                                    <Input type="text" className="form-control" onChange={this.LastName} placeholder="LastName" required />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" className="form-control" onChange={this.UserName} placeholder="Username" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" className="form-control" value={this.state.Email} onChange={this.Email} placeholder="Email" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" className="form-control" value={this.state.Password} onChange={this.Password} placeholder="Password" required />
                        </FormGroup>

                        <FormGroup>
                            <Input type="submit" onClick={this.register} value="Register" id="button" />
                        </FormGroup>
                        <hr />
                        <FormGroup className="text-center">
                            <div>Already have an account?</div>
                            <Link to="/Login" alt="Login Link" aria-label="re-direct to log-in page" className="btn btn-link" style={{ color: "black" }}>Log In</Link>
                        </ FormGroup>
                    </Form>
                </div >
            </Container>

        )
    }
}
