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
    /** Guarda el email que haya ingresado en el input de email*/
    saveEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    /** Guarda el password que haya ingresado en el input de password*/
    savePass(event) {
        this.setState({
            password: event.target.value
        });
    }
    /* login() conprueba que no estén vacios los input de email y password y ejecuta el chequeo de usuario*/
    login() {
        if (this.state.email && this.state.password) {

            /*Funcion axios.post() hace chequeo de usuario en la base de datos con {this.state}. 
            Si devuelve un token, es guardado en {this.setState.token} dentro del localStorage()*/
            axios.post("http://challenge-react.alkemy.org/", this.state)
                .then((response) => {

                    localStorage.setItem("token", response.data.token)
                    /**En esta variable de tipo JSON se guarda el token de usuario*/
                    this.setState({
                        token: response.data.token
                    });
                })
                /**.catch() funciona como un else en un if, si no guarda token de usuario, devuelve mensaje de error*/
                .catch((error) => {
                    alert("Mail o contraseña incorrecto")

                })
        }
        else {
            alert("Campos vacios")
        }
    }


    render() {
        //Si localStorage tiene un token guardado, redirige a Home
        if (localStorage.getItem("token")) {
            return (<Redirect to="/home" />)
        }

        return (
            <div class="row">
                <div class="col-9">
                    <div>
                        <h1 class="d-flex justify-content-center">Welcome</h1>
                        <p class="d-flex justify-content-center">Make your dream team of superheroes</p>
                    </div>
                </div>
                <div class="col-3">
                    <form className="row border-left col-12 col-lg-6">
                        <h1 class="col-12">Log in</h1>
                        <div class="row">
                            <div class=" form-group float-left col-12">
                                <label for="email">Email address:</label>
                                <input type="email" class="form-control" placeholder="Enter email" id="email" onChange={(event) => this.saveEmail(event)} />
                            </div>
                        </div>
                        <div className="row">
                            <div class="form-group float-left col-12">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" placeholder="Enter password" id="pwd" onChange={(event) => this.savePass(event)}></input>
                            </div>
                        </div>
                        <button type="submit" class="submit btn btn-dark" onClick={() => this.login()}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;