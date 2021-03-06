import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    zIndex: 9999999,    
    flexGrow: 1,
    //height:`${theme.mixins.toolbar.minHeight}px`,
    height: theme.spacing.unit * 3,
    backgroundColor: theme.palette.primary.main,
    color : theme.palette.common.white,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,               
  },  
  typography: { 
    position: 'relative',
    top: theme.spacing.unit * 0.5
  }
});

function Footer(props) {
  const { classes } = props;
  return (    
    <footer className={classes.root}>      
        <Typography className={classes.typography} align="center" variant="caption" color="inherit">          
          © 2018 Wagner Bernardes Teixeira. Todos os direitos reservados.
        </Typography>      
    </footer>    
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);