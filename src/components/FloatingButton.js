import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: "fixed",
    bottom: "0",
    right: "0"
  }
});

function FloatingButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="fab"
        color="secondary"
        aria-label="Add"
        className={classes.button}
        onClick={props.handleButtonClick}
      >
        <AddIcon />
      </Button>
    </div>
  );
}

FloatingButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingButton);
