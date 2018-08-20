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
    _lmsType: LMS_BB
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
              margin="dense"
              id="_consumerKey"
              label="CONSUMER KEY"
              type="text"
              onChange={e =>
                this.setState({ consumerKey: e.target.value, error: true })
              }
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="_sharedSecret"
              label="SHARED SECRET"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="_school"
              label="COLLEGE"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="contact_email"
              label="CONTACT EMAIL"
              type="text"
              fullWidth
            />

            <FormControl>
              <InputLabel htmlFor="_lmsType" fullWidth>
                LMS TYPE
              </InputLabel>
              <Select
                value={this.state._lmsType}
                onChange={this.handleChange}
                margin="dense"
                inputProps={{
                  name: "_lmsType",
                  id: "_lmsType"
                }}
                fullWidth
              >
                <MenuItem value={LMS_BB}>Blackboard</MenuItem>
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
            required
            margin="dense"
            id="_blackboardPath"
            label="BB PATH"
            type="text"
            fullWidth
          />

          <TextField
            required
            margin="dense"
            id="bbAppKey"
            label="BB APP KEY"
            type="text"
            fullWidth
          />

          <TextField
            required
            margin="dense"
            id="bbAppSecretkey"
            label="BB SECRET KEY"
            type="text"
            fullWidth
          />
        </div>
      );
    case LMS_CANVAS:
      return (
        <div>
          <TextField
            required
            margin="dense"
            id="_canvasPath"
            label="CANVAS PATH"
            type="text"
            fullWidth
          />

          <TextField
            required
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
