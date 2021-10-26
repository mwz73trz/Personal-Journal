import { Component } from "react";
import journalAPI from "../api/journalAPI";
import Journals from "../components/Journals";

class HomePage extends Component {
  state = {
    journals: [],
  };

  getJournals = async () => {
    try {
      let journalData = await journalAPI.getJournals();
      this.setState({ journals: journalData });
    } catch (error) {
      console.log(error);
    }
  };

  createJournal = async () => {
    let inputTitle = document.getElementById("new-journal-title");
    let inputDescription = document.getElementById("new-journal-description");
    if (inputTitle && inputDescription) {
      let newJournalParams = {
        title: inputTitle.value,
        description: inputDescription.value,
      };
      let data = await journalAPI.createJournal(newJournalParams);
      if (data) {
        let newJournals = [...this.state.journals, data];
        this.setState({ journals: newJournals });
      }
    }
  };

  deleteJournal = async (journalId) => {
    try {
      if (journalId > 0) {
        let result = await journalAPI.deleteJournal(journalId);
        if (result.success) {
          let newJournals = this.state.journals.filter((journal, index) => {
            return journal.id !== journalId;
          });
          this.setState({ journals: newJournals });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getJournals();
  }

  renderWelcome() {
    let journalElements = this.state.journals.map((journal, index) => {
      return (
        <li key={`journal-${index}`}>
          <Journals journal={journal} handleDelete={this.deleteJournal} />
        </li>
      );
    });
    return (
      <div>
        <h2>Welcome to Your Journal App</h2>
        <h2>Journals</h2>
        <ul className="simple-list" style={{ listStyle: "none" }}>
          {journalElements}
        </ul>
        <hr />
        <input id="new-journal-title" placeholder="new title" />
        <input id="new-journal-description" placeholder="new description" />
        <button onClick={this.createJournal}>Add Journal Entry</button>
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

export default HomePage;
