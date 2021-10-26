import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JournalPage from "./pages/JournalPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/journals/:journalId" exact component={JournalPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
