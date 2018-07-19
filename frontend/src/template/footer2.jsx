import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'absolute',    
    bottom: `${theme.mixins.toolbar.minHeight + 8}px`,
    width: "100%",
  },
  appBarFooter: {
    zIndex: theme.zIndex.drawer + 4,
  }  
});

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);

//classes={{colorPrimary :  classes.colorPrimary}}