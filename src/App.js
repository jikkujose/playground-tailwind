import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import { Card } from "./Card"

class App extends Component {
  render() {
    return (
      <div className="p-32 min-h-screen">
        <Card color="indigo" />
      </div>
    )
  }
}

export default App
