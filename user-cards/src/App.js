import React from 'react';
import axios from "axios";
import './App.css';

//componenets
import Card from "./Components/UserCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      member: ""
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
    </div>
  );
}
}

export default App;
