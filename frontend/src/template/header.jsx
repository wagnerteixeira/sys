import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import ChevronLeft from '@material-ui/icons/ChevronLeft'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconListButton from '../common/iconListButton'
import { handleDrawer } from '../template/appActions'

const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,    
    overflow: 'hidden',
    position: 'absolute',
    display: 'flex',
    width: "100%",
    height: '100%',
   },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  typographyDawerOpen: {
    marginLeft: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing.unit * 5,
    },
  },
  iconClassName: {
    fontSize: 35
  },
  listItemClassName: {
    paddingLeft: theme.spacing.unit * 1,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing.unit * 0.5,
      marginTop: -10
    },
  },
  listItemTextClassName : {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
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
    width: theme.spacing.unit * 5,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 6,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    ...theme.mixins.toolbar,
  },  
});

class Header extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.props.app.drawerOpen && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.props.app.drawerOpen}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.props.handleDrawer(true)}
              className={classNames(classes.menuButton, this.props.app.drawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.typographyDawerOpen} variant="title" color="inherit" noWrap>
              Orçamentos
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer 
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.props.app.drawerOpen && classes.drawerPaperClose),
          }}
          open={this.props.app.drawerOpen}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={() => this.props.handleDrawer(false) } color="inherit">
               <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List>
            <IconListButton 
              linkTo='/' 
              iconType='insert_drive_file' 
              onClickButton={this.clickList} 
              primaryText='Adicionar arquivo SINAPI'               
              listItemClassName={classes.listItemClassName} 
              iconClassName={classes.iconClassName}
              listItemTextClassName={classes.listItemTextClassName}
            />
            <IconListButton 
              linkTo='/user' 
              iconType='person' 
              onClickButton={this.clickList}  
              primaryText='Cadastro de Usuários' 
              listItemClassName={classes.listItemClassName} 
              iconClassName={classes.iconClassName}
              listItemTextClassName={classes.listItemTextClassName}
            />             
            <IconListButton 
              linkTo='/fileselector' 
              iconType='add_circle' 
              onClickButton={this.clickList}  
              primaryText='Adicionar arquivo SINAPI' 
              listItemClassName={classes.listItemClassName} 
              iconClassName={classes.iconClassName}
              listItemTextClassName={classes.listItemTextClassName}
            />
          </List>          
        </Drawer>        
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({app: state.app })
const mapDispatchToProps = dispatch => bindActionCreators({ handleDrawer }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Header));