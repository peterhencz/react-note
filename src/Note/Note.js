import React, { Component } from "react";
import "./Note.css";
import PropTypes from "prop-types";

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(noteId) {
    this.props.removeNote(noteId);
  }

  render(props) {
    return (
      <div>
        <span onClick={() => this.handleRemoveNote(this.noteId)}>x</span>
        <p>{this.noteContent}</p>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string,
};
export default Note;
