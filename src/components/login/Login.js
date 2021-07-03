import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    saveEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    savePass(event) {
        this.setState({
            password: event.target.value
        });
    }

    login() {
        if (this.state.email && this.state.password) {

            axios.post("http://challenge-react.alkemy.org/", this.state)
                .then((response) => {
                    localStorage.setItem("token", response.data.token)

                    this.setState({
                        token: response.data.token
                    });
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            alert("gordo")
        }
    }


    render() {
        console.log(this.state.token);

        if (localStorage.getItem("token")) {
            return (<Redirect to="/home" />)
        }

        return (
            <div class="row container float-right">
                <form className="row border-left col-12 col-lg-6 offset-lg-6">
                    <h1 class="col-12">Logi</h1>
                    <div class="row col-12">
                        <div class=" form-group float-left col-lg-6 col-12">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" placeholder="Enter email" id="email" onChange={(event) => this.saveEmail(event)} />
                        </div>
                    </div>
                    <div className="row col-12">
                        <div class="form-group float-left col-12 col-lg-6">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" onChange={(event) => this.savePass(event)}></input>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-dark rounded" onClick={() => this.login()}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;