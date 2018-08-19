import React, { Component } from "react";
import { connect } from "react-redux";
import editIcon from "../edit-icon.svg";
import deleteIcon from "../delete-icon.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import {
  fetchCredentials,
  deleteCredential,
  fetchCredential
} from "../actions/LmsCredentialsAction";
import FloatingButton from "./FloatingButton";
import { LMS_BB, LMS_CANVAS, LMS_MOODLE } from "../types/types";

class CredTableComponent extends Component {
  componentWillMount() {
    console.log(" component is going to mount");
    this.props.fetchCredentials();
  }

  handleDelete(index) {
    console.log("deleting : " + index);
    let filteredData = this.props.items.filter((e, i) => i != index);
    this.props.deleteCredential(filteredData);
  }

  handleEdit(index) {
    console.log(" editing :  " + index);
    let editRowData = this.props.items.filter((e, i) => i == index);
    this.props.updateCredentials(editRowData);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log("form data is : " + formData);
    this.props.createCredentials(formData);
  }

  render() {
    return (
      <Paper>
        <FloatingButton />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>COLLEGE</TableCell>
              <TableCell>CONSUMER KEY</TableCell>
              <TableCell>SHARED SECRET</TableCell>
              <TableCell>LMSTYPE</TableCell>
              <TableCell>CANVAS TOKEN</TableCell>
              <TableCell>CANVAS PATH</TableCell>
              <TableCell>BB PATH</TableCell>
              <TableCell>BB APP KEY</TableCell>
              <TableCell>BB SECRET KEY</TableCell>
              <TableCell>DELETE</TableCell>
              <TableCell>EDIT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.items.map((row, index) => {
              return (
                <TableRow key={index} style={getLmsStyle(row.lms_type)}>
                  <TableCell>{row.contact_school}</TableCell>
                  <TableCell>{row.consumer_key}</TableCell>
                  <TableCell>{row.shared_secret}</TableCell>
                  <TableCell>{row.lms_type}</TableCell>
                  <TableCell>{row.canvas_access_token}</TableCell>
                  <TableCell>{row.canvas_path}</TableCell>
                  <TableCell>{row.blackboard_path}</TableCell>
                  <TableCell>{row.bbAppKey}</TableCell>
                  <TableCell>{row.bbAppSecretkey}</TableCell>
                  <TableCell>
                    <img
                      src={deleteIcon}
                      onClick={() => this.handleDelete(index)}
                    />
                  </TableCell>

                  <TableCell>
                    <img
                      src={editIcon}
                      onClick={() => this.handleEdit(index)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

function getLmsStyle(lmsType) {
  switch (lmsType) {
    case LMS_BB:
      return { background: "#E8EBEB" };
    case LMS_CANVAS:
      return { background: "#DCCED5" };
    case LMS_MOODLE:
      return { background: "#CFE1E3" };
  }
}

function mapStateToProps(state) {
  return {
    items: state.credentials.items,
    item: state.credentials.item
  };
}

export default connect(
  mapStateToProps,
  { fetchCredentials, deleteCredential, fetchCredential }
)(CredTableComponent);
