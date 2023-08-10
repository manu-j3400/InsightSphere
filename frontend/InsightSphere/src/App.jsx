import React, { useState } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((error) => console.error("API call error:", error));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        {/* Render the API response */}
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
