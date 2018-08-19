import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  updateCredentials,
  createCredentials
} from "../actions/LmsCredentialsAction";
import FloatingButton from "./FloatingButton";
import { LMS_BB, LMS_CANVAS, LMS_MOODLE } from "../types/types";

class CredFormComponent extends React.Component {
  state = {
    open: false,
    error: false,
    _lmsType: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickOpen = () => {
    console.log("going to open the dialog ...");
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    console.log("going to close the modal ....");
    this.setState({ open: false });
  };

  handleSave = () => {
    console.log("handling save ....");
    // console.log(this.state.error);

    // this.state.error
    //   ? this.setState({ open: true })
    //   : this.setState({ open: false });

    // let formData = this.state;
    // this.props.createCredentials(formData);
  };

  render() {
    return (
      <div>
        <FloatingButton handleButtonClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Credentials</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Mapping between lms systems with institutions
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="normal"
              id="_consumerKey"
              label="CONSUMER KEY"
              type="text"
              error={true}
              onChange={e =>
                this.setState({ consumerKey: e.target.value, error: true })
              }
            />
            <TextField
              required
              margin="normal"
              id="_sharedSecret"
              label="SHARED SECRET"
              type="text"
            />
            <TextField
              margin="dense"
              id="_school"
              label="COLLEGE"
              type="text"
            />
            <TextField
              margin="dense"
              id="contact_email"
              label="CONTACT EMAIL"
              type="text"
            />

            <FormControl>
              <InputLabel htmlFor="_lmsType">LMS TYPE</InputLabel>
              <Select
                value={this.state._lmsType}
                onChange={this.handleChange}
                inputProps={{
                  name: "_lmsType",
                  id: "_lmsType"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={LMS_BB}>BB</MenuItem>
                <MenuItem value={LMS_CANVAS}>Canvas</MenuItem>
                <MenuItem value={LMS_MOODLE}>Moodle</MenuItem>
              </Select>
            </FormControl>

            {getLmsDynamicFields(this.state._lmsType)}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function getLmsDynamicFields(_lmsType) {
  switch (_lmsType) {
    case LMS_BB:
      return (
        <div>
          <TextField
            margin="dense"
            id="_blackboardPath"
            label="BB PATH"
            type="text"
          />

          <TextField
            margin="dense"
            id="bbAppKey"
            label="BB APP KEY"
            type="text"
          />

          <TextField
            margin="dense"
            id="bbAppSecretkey"
            label="BB SECRET KEY"
            type="text"
          />
        </div>
      );
    case LMS_CANVAS:
      return (
        <div>
          <TextField
            margin="dense"
            id="_canvasPath"
            label="CANVAS PATH"
            type="text"
          />

          <TextField
            margin="dense"
            id="_canvasAccessToken"
            label="CANVAS TOKEN"
            type="text"
            fullWidth
          />
        </div>
      );
  }
}

export default CredFormComponent;
