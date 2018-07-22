import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Hellohaiku from "@haiku/jikkujose-hellohaiku/react"

import { Card } from "./Card"

const zach = {
  color: "red",
  name: "Zach Latta",
  image: "https://hackclub.com/team/zach.jpg",
  role: "Executive Director",
  description:
    "Zach dropped out of high school after his freshman year to work in the technology industry and had over 5 million people using his software by the time he turned 17. He founded Hack Club to build the program he wish he had in high school and has been awarded the Thiel Fellowship and Forbes 30 Under 30 for his work.",
}

class App extends Component {
  render() {
    return (
      <div className="p-32 min-h-screen">
        <Card {...zach} />
        <Hellohaiku loop={true} />
      </div>
    )
  }
}

export default App
