import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            pass:""
         }
    }

    saveEmail(event){
        this.setState({
            email: event.target.value
        });
    }

    savePass(event){
        this.setState({
            pass: event.target.value
        });
    }


    render() { 
        console.log(this.state.email);
        return (
            <form className="container">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email" onChange={(event)=>this.saveEmail(event)}/>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
    
                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" onChange={(event)=>this.savePass(event)}></input>
    
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        );
    }
}
 
export default Login;