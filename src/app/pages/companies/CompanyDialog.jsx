import React, { Component } from 'react';
import Dialog, { DialogActions } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

class CompanyDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: (typeof props.open === 'boolean') ? props.open : false,
    };
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { children, open, transition, ...other } = this.props;
    return (
      <Dialog
        fullScreen
        open={this.state.open}
        onRequestClose={this.close}
        transition={transition || <Slide direction="up" />}
        {...other}
      >
        <DialogActions>
          <IconButton color="primary" onClick={this.close} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </DialogActions>
        {children}
      </Dialog>
    );
  }
}
export default CompanyDialog;

