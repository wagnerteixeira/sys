import React from 'react'
import Typography from 'material-ui/Typography'

export default props => (
    <section style={{display: 'flex', flexDirection: 'row'}}> 
        <Typography variant="title">{props.title}</Typography>&nbsp;&nbsp;
        <Typography style={{position: 'relative', top:'7px'}} variant="caption" gutterBottom align="left">{props.small}</Typography>        
    </section>
)