import { Component } from "react";
import { Link } from "react-router-dom";

class Journals extends Component {
  render() {
    return (
      <span>
        <Link to={`/journals/${this.props.journal.id}`}>
          {this.props.journal.title}
        </Link>
        <button onClick={() => this.props.handleDelete(this.props.journal.id)}>
          Delete
        </button>
      </span>
    );
  }
}

export default Journals;
