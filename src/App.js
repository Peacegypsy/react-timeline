import React, { Component } from "react";
import "./App.css";
import timelineData from "./data/timeline.json";

import TimelineEvent from "./components/TimelineEvent";
import Timeline from "./components/Timeline";

// const data = [
//   {
//     person: "Christina",
//     status: "Learning and succeeding",
//     timeline: "2 days ago"
//   }
// ];

class App extends Component {
  render() {
    console.log(timelineData.events);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelaces social media</h1>
        </header>
        <main className="App-main" />
        <Timeline data={timelineData} />
      </div>
    );
  }
}

export default App;
