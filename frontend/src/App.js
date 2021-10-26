import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserContext from "./contexts/UserContext";

class App extends Component {
  state = {
    user: null,
  };

  updateUser = (newUserData) => {
    this.setState({ user: newUserData });
  };

  renderLoginPage = (routeProps) => {
    return <LoginPage {...routeProps} completeLogin={this.updateUser} />;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <UserContext.Provider value={this.state.user}>
            <div>
              <Route path="/login" exact render={this.renderLoginPage} />
              <Route path="/" exact component={HomePage} />
            </div>
          </UserContext.Provider>
        </Router>
      </div>
    );
  }
}

export default App;
