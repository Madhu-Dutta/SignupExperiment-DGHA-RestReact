import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastName: '',
            email: '',
            password: '',
            username: ''
        }
    }

    onchange = (e) => {
        //Get value from target input elements(name) and update the state with the input value
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {

        e.preventDefault();
        fetch('http://localhost:59550/api/customers/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status === 'Success')
                    this.props.history.push("/");
                else
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })
    }


    render() {
        return (
            <div id="container">
                <div className="header">
                    <h2 className="text-center">Register</h2>
                    <hr />
                </div>
                <div className="msg-block"></div>

                <Form name="form">
                    <FormGroup>
                        <Row>
                            <Col xs="6">
                                <Input type="text" className="form-control" onChange={this.onchange} name="firstname" placeholder="FirstName" required />
                            </Col>
                            <Col xs="6">
                                <Input type="text" className="form-control" onChange={this.onchange} name="lastname" placeholder="LastName" required />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" className="form-control" onChange={this.onchange} name="username" placeholder="Username" required />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" className="form-control" onChange={this.onchange} name="email" placeholder="Email" required />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" className="form-control" onChange={this.onchange} name="password" placeholder="Password" required />
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

        )
    }
}
