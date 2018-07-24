
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { blueGrey } from '@material-ui/core/colors';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'

import Header from './template/header';
import Footer from './template/footer'
import Main from './config/main'


const styles = theme => ({
  content: {    
    position: 'relative',
    margin: 0,
    overflowX: "hidden",
    //left: theme.spacing.unit * 10,
    top: theme.mixins.toolbar.minHeight + 10
   },
});

const muiTheme = createMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary: {
      light: "#0099BC",
      main: "#0078D7",
      dark: "#0063B1",
    },
    secondary: {
      light: blueGrey[600],
      main: blueGrey[700],
      dark: blueGrey[800],
    },     
  } 
});

class App extends Component {
  render() {
    const { classes, theme } = this.props;    
     return (
      <MuiThemeProvider theme={muiTheme}>
        <Header theme={muiTheme}/>     
        <div className={classes.content} style={{left: !this.props.app.drawerOpen ? (theme.spacing.unit * 9) + 4  : theme.spacing.unit * 39 }}>
          <Main /> 
        </div>                       
        <Footer />
      </MuiThemeProvider>      
    );
  }
}

const mapStateToProps = state => ({app: state.app })
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(App)));

