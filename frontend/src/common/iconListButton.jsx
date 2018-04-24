import React  from 'react'
import Icon from 'material-ui/Icon';
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

import If from '../operator/if'


export default props => (
  <ListItem button className={props.listItemClassName} onClick={props.onClickButton}>
    <ListItemIcon >
      <Icon  color="primary" style={{ fontSize: props.iconFontSize || 30 }}>{props.iconType}</Icon>
    </ListItemIcon>      
    <ListItemText primary={props.primaryText} secondary={props.secondaryText} style={{ whiteSpace : "nowrap" }} />  
  </ListItem>  
)

//<If test={props.hideItemText}>
//</If>  
