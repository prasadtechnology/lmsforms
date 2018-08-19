import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  state = {
    open: false,
    error: false
  };

  handleClickOpen = () => {
    console.log("going to open the dialog ...");
    this.setState({
      open: true,
      consumerKey: ""
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    console.log(this.state.error);

    this.state.error
      ? this.setState({ open: true })
      : this.setState({ open: false });

    console.log(this.state.consumerKey);
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Add Credentials</Button>
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
              label="Consumer Key"
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
              label="Shared Secret"
              type="text"
            />
            <TextField
              required
              margin="dense"
              id="_institutionId"
              label="Institute Id"
              type="text"
            />
            <TextField
              margin="dense"
              id="_school"
              label="College Name"
              type="text"
            />

            <TextField
              margin="dense"
              id="_name"
              label="Contact Name"
              type="text"
            />
            <TextField
              margin="dense"
              id="contact_email"
              label="Contact Email"
              type="text"
            />
            <TextField
              required
              margin="dense"
              id="_lmsType"
              label="LMS Type"
              type="text"
            />

            <TextField
              margin="dense"
              id="_canvasPath"
              label="Canvas path"
              type="text"
            />
            <TextField
              margin="dense"
              id="_blackboardPath"
              label="Blackboard path"
              type="text"
            />

            <TextField
              margin="dense"
              id="bbAppKey"
              label="Blackboard App Key"
              type="text"
            />

            <TextField
              margin="dense"
              id="bbAppSecretkey"
              label="Blackboard Secret Key"
              type="text"
            />

            <TextField
              margin="dense"
              id="_canvasAccessToken"
              label="Canvas Access Token"
              type="text"
              fullWidth
            />
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
