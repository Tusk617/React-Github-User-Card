import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Tusk617")
    .then(response => {
      console.log(response.data);
      this.setState({
        members: response.data.avatar_url
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

      </div>
    </div>
  );
}
}

export default App;
