import React  from 'react'
import Icon from 'material-ui/Icon';
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

import { Link } from 'react-router-dom'

import If from '../operator/if'

export default props => (
  <Link to={props.linkTo} style={{textDecoration: 'none'}} >
    <ListItem href={props.linkTo} button className={props.listItemClassName} onClick={props.onClickButton}>
      <ListItemIcon >
        <Icon  color="primary" style={{ fontSize: props.iconFontSize || 30 }}>{props.iconType}</Icon>
      </ListItemIcon>      
      <ListItemText primary={props.primaryText} secondary={props.secondaryText} style={{ whiteSpace : "nowrap" }} />  
    </ListItem>  
  </Link>
)

//<If test={props.hideItemText}>
//</If>  
