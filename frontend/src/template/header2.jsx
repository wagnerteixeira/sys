import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import IconListButton from '../common/iconListButton'

const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 700,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer,    
  },
  drawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 8,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  listItemClassName :{
    padding: theme.spacing.unit * 2,
  }
});

class Header extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  clickList = () => {    
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    console.log(theme)

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar disableGutters>            
            <Typography variant="title" color="secondary" noWrap>
              Systema Teste
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer}          
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}>
          <AppBar position="absolute">
            <Toolbar disableGutters>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.state.open ? this.handleDrawerClose : this.handleDrawerOpen}
                  className={classes.menuButton}>
              <MenuIcon color="action"/>
              </IconButton>
              
            </Toolbar>
          </AppBar>
          <div className={classes.toolbar}>
           
          </div>
          <Divider />
          <div color='#2196F3'>
            <IconListButton iconColor='action' iconType='insert_drive_file' onClickButton={this.clickList} primaryText='Cadastros de Produtos' listItemClassName={classes.listItemClassName} hideItemText={this.state.open}/>
            <IconListButton iconType='person' onClickButton={this.clickList}  primaryText='Cadastro de Usuários' listItemClassName={classes.listItemClassName} hideItemText={this.state.open}/> 
            <IconListButton iconType='add_circle' onClickButton={this.clickList}  primaryText='Texto primário' listItemClassName={classes.listItemClassName} hideItemText={this.state.open}/>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
