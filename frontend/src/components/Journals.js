import { Component } from "react";

class Journals extends Component {
  render() {
    return <span>{this.props.journal.title}</span>;
  }
}

export default Journals;
