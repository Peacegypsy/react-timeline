import React, { Component } from "react";
import "./App.css";
import timelineData from "./data/timeline.json";
import TimelineEvent from "./components/TimelineEvent";
import Timeline from "./components/Timeline";

const data = [
  {
    person: "Christina",
    status: "Learning and succeeding",
    timeline: "2 days ago"
  }
];

class App extends Component {
  render() {
    console.log(timelineData);
    const statusComponents = data.map(status => {
      return (
        <TimelineEvent
          name={status.person}
          status={status.status}
          timestamp={status.timestamp}
          key={status.name}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelaces social media</h1>
        </header>
        <main className="App-main" />
        {statusComponents}
      </div>
    );
  }
}

export default App;
