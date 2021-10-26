import { Component } from "react";
import journalAPI from "../api/journalAPI";

class JournalPage extends Component {
  static MODE_TYPE = {
    VIEW: 1,
    UPDATE: 2,
  };

  state = {
    journal: null,
  };

  async getJournal() {
    try {
      let journalId = this.props.match.params.journalId;
      let journalData = await journalAPI.getJournalById(journalId);
      if (journalData) {
        this.setState({ journal: journalData });
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeMode = (newMode) => {
    this.setState({ mode: newMode });
  };

  updateJournal = async () => {
    try {
      let inputTitle = document.getElementById("journal-title");
      let inputDescription = document.getElementById("journal-description");

      let journalId = this.state.journal.id;

      if (inputTitle && inputDescription && journalId > 0) {
        let updatedJournal = {
          title: inputTitle.value,
          description: inputDescription.value,
        };
        let data = await journalAPI.updateJournal(journalId, updatedJournal);
        if (data) {
          this.setState({ journal: data });
          this.changeMode(JournalPage.MODE_TYPE.VIEW);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getJournal();
  }

  renderJournal() {
    if (!this.state.journal) {
      return <p>No Journal Found!</p>;
    }
    if (this.state.mode === JournalPage.MODE_TYPE.UPDATE) {
      return (
        <div>
          <div>
            <h1 className="nonbreak">Title: </h1>
            <input
              id="journal-title"
              placeholder="title"
              defaultValue={this.state.journal.title}
            />
          </div>
          <div>
            <h1 className="nonbreak">Description: </h1>
            <input
              id="journal-description"
              placeholder="description"
              defaultValue={this.state.journal.description}
            />
          </div>
          <br />
          <button onClick={this.updateJournal}>Save</button>
          <button onClick={() => this.changeMode(JournalPage.MODE_TYPE.VIEW)}>
            Cancel
          </button>
        </div>
      );
    }
    return (
      <div>
        <h2>Title: {this.state.journal.title}</h2>
        <h3>Description: {this.state.journal.description}</h3>
        <h3>Created on Date: {this.state.journal.date_created}</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Journal Details Page</h1>
        {this.renderJournal()}
        <hr />
        <button onClick={() => this.changeMode(JournalPage.MODE_TYPE.UPDATE)}>
          Update
        </button>
      </div>
    );
  }
}

export default JournalPage;
