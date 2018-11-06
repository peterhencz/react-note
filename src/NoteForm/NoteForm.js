import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NoteForm.css";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: "",
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value,
    });
  }

  writeNote() {
    this.props.addNote(this.state.newNoteContent);
    this.setState({
      newNoteContent: "",
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <button onClick={this.writeNote}>cica</button>
      </div>
    );
  }
}

export default NoteForm;
