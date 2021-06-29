import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroe: this.props.location.state.superheroe
        }
    }

    render() {
        console.log(this.props.location)
        return (
                <div class="container">
                    <h2>{this.state.superheroe.name}</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Info</th>
                                <th>Valor</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.superheroe.biography["full-name"]}</td>
                            </tr>
                            <tr>
                                <td>Peso</td>
                                <td>{this.state.superheroe.appearance.weight.join(", ")}</td>

                            </tr>
                            <tr>
                                <td>Altura</td>
                                <td>{this.state.superheroe.appearance.height.join(", ")}</td>

                            </tr>
                        </tbody>
                    </table>
                    <Link type="button" class="btn btn-success col-sm-2 offset-sm-8" to={{
                        pathname: "/home",
                    }}> Back </Link>
                </div>
        );
    }
}

export default Profile;