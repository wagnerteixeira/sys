import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import If from '../common/if'

class ResponsiveDialog extends React.Component {
  render() {  
    return (
      <div>
        <Dialog
          fullScreen={false}
          open={this.props.open}
          onClose={() => this.props.handleClose()}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.props.headerText}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <If test={this.props.showClose} >
              <Button onClick={() => this.props.handleClose()} color="primary">
                Fechar
              </Button>
            </If>
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
