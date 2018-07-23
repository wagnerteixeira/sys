import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ResponsiveDialog extends React.Component {
  state = {
    open: false,
  };

  componentWillReceiveProps(newProps) {
    this.setState({open: newProps.open});
  }

  render() {
    const { text, headerText, handleClose } = this.props;
    return (
      <div>
        <Dialog
          fullScreen={false}
          open={this.state.open}
          onClose={() => handleClose()}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{headerText}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  text: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
