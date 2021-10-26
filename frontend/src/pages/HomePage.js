import { Component } from "react";
import { Link } from "react-router-dom";
import journalAPI from "../api/journalAPI";
import Journals from "../components/Journals";
import UserContext from "../contexts/UserContext";

class HomePage extends Component {
  state = {
    journals: [],
  };

  getJournals = async () => {
    try {
      let token = this.context ? this.context.token : null;
      if (token) {
        let journalData = await journalAPI.getJournals(token);
        this.setState({ journals: journalData });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getJournals();
  }

  renderWelcome() {
    if (!this.context) {
      return (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    }
    let journalElements = this.state.journals.map((journal, index) => {
      return (
        <li key={`journal-${index}`}>
          <Journals journal={journal} />
        </li>
      );
    });
    return (
      <div>
        <h2>Welcome to Your Journal App {this.context.user.username}</h2>
        <h2>Journals</h2>
        <ul className="simple-list" style={{ listStyle: "none" }}>
          {journalElements}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.renderWelcome()}
      </div>
    );
  }
}

HomePage.contextType = UserContext;

export default HomePage;
