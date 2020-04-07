import React from 'react';
import axios from "axios";
import './App.css';

//componenets
import Card from "./Components/UserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      member: "",
      follower: ""
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Tusk617")
    .then(response => {
      // console.log(response.data);
      this.setState({
        member: response.data
      })
      console.log(this.state.member)
    })

    axios.get("https://api.github.com/users/Tusk617/followers")
    .then(response => {
      // console.log(response.data)
      this.setState({
        follower: response.data
      })
    })
  }

  // fetchFollowers = event => {
  //   event.preventDefault();
  //   axios.get("https://api.github.com/users/Tusk617/followers")
  //   .then(response => {
  //     console.log(response)
  //   })
  // }

  render() {
  return (
    <div className="App">
      <header className="Page-header">
        <h1>Meet The Team!</h1>
      </header>
      <div className="memberCards">
        <Card 
          avatar= {this.state.member.avatar_url}
          name= {this.state.member.login}
          location= {this.state.member.location}
        />
      </div>
    </div>
  );
}
}

export default App;
