const Login = () => {
    return (
        <form className="container">
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" placeholder="Enter email" id="email" />
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>

                <input type="password" class="form-control" placeholder="Enter password" id="pwd"></input>

            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
        </form>
    );
}

export default Login;