
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import {grey, blueGrey} from 'material-ui/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from 'material-ui/Typography';

import {fade} from 'material-ui/styles/colorManipulator'
import spacing from 'material-ui/styles/spacing'
import createMuiTheme from 'material-ui/styles/createMuiTheme'

import Header from './template/header';
import Footer from './template/footer'

import IconListButton from './common/iconListButton'

const styles  = theme => ({
  root: {
    flexGrow: 1,    
    zIndex: 1,
    position: 'absolute',
    height: "100%",
    width : "100%"
   },   
   content: {
    flexGrow: 1,
    position: 'relative',
    left: theme.mixins.toolbar.minHeight + 30,
    top:`${theme.mixins.toolbar.minHeight}px`,    
    height: "100%",
    width: "100%"
  },
})

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
    
    const { classes } = this.props;
    
     return (
      <MuiThemeProvider theme={muiTheme}>
       <div className={classes.root}  >      
          <Header theme={muiTheme}/>   
          <main className={classes.content}>
              <h1>TESTE</h1>
              <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main>       
          <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

