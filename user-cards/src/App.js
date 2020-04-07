import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  render() {
  return (
    <div className="App">
      <header className="Page-header">
        <h1>Meet The Team!</h1>
      </header>
    </div>
  );
}
}

export default App;
