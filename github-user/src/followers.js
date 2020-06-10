/*## STEP 3 - Fetch the User's Followers

- When your component mounts, you will also fetch the user's followers using this endpoint:
  https://api.github.com/users/< Your github name >/followers
- Set that data to state as well, and display the data in your app*/
import React, { Component } from "react";
import axios from "axios";


class Followers extends Component {
    constructor() {
        super();

    this.state = {
        followers: {}
    };
    }
    componentDidMount() {
        axios
            .get("https://api.github.com/users/stefxm/followers")
            .then(response => {
                console.log(response.data);
                this.setState({ followers:response.data });
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
        <div>
            <h1>GitHub Followers</h1>
            <h2>{this.state.login}</h2>
        </div>
        )
    }
}

export default Followers;