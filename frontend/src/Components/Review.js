import React, { Component } from 'react';

export default class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    logout = () => {
        console.log('logout');
        this.setState({
            redirect: true
        })

    }
    render() {
        if (this.state.redirect === true) {
            this.props.history.push("/Login");
        }
        return (
            <div>
                <h1>Review</h1>
                <button onClick={this.logout}>LOG OUT</button>
            </div>
        )
    }
}
