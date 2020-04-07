import React from 'react';
import axios from "axios";
import './App.css';

//componenets
import Card from "./Components/UserCard"
import FollowerCards from "./Components/FollowerCards"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      member: "",
      follower: [],
      followerUrl: ""
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Tusk617")
    .then(response => {
      // console.log(response.data);
      this.setState({
        member: response.data
      })
    })
    axios.get("https://api.github.com/users/Tusk617/followers")
    .then(response => {
      response.data.map(item => {
        axios.get(item.url)
        .then(response => {
          console.log(response.data)
          this.setState({
            follower: [...this.state.follower, response.data]
          })
          console.log(this.state.follower)
        })
      })
    })


  }


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
      {/* <button onClick = {this.fetchFollowers}>Show followers</button> */}
      {this.state.follower.map(person => (
        <Card 
          avatar= {person.avatar_url}
          name= {person.login}
          location= {person.location}
        />
      ))}
    </div>
  );
}
}

export default App;
