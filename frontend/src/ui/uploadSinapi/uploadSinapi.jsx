import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CloudUpload from '@material-ui/icons/CloudUpload';
import AttachFile from '@material-ui/icons/AttachFile';
import configUrl from '../../consts/config';
import ResponsiveDialog from '../../common/alertDialog'

import axios, { post } from 'axios';


const styles = theme => ({
    marginUnit: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    formControl: {
        margin: theme.spacing.unit,
        width: "70%",
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});


class UploadSinapi extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedFile: null, alertSendOpen : false, alertNoFileOpen : false}
        this.uploadHandler = this.uploadHandler.bind(this)
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
        this.noChange = this.noChange.bind(this);
      }

    fileChangedHandler = (event) => {
        console.log(this.state)
        this.setState({...this.state, selectedFile: event.target.files[0]})
        console.log(this.state)
    }

    uploadHandler = () => { 
        console.log(this.state.selectedFile);
        if (this.state.selectedFile) {
          this.fileUpload(this.state.selectedFile)
          this.setState({...this.state, selectedFile: null, alertSendOpen: true})
        }
        else 
            this.setState({...this.state, alertNoFileOpen: true})
    }

    noChange() {

    }

    fileUpload(file){
        const url = configUrl.OPEN_API_URL + '/fileUpload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData, config)
    }

    render() {
        const { classes } = this.props; 
        return (
            <div>   
                <h1>Upload Arquivo SINAPI</h1>
                <input
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={this.fileChangedHandler} 
                />
                <label htmlFor="contained-button-file">
                    <Button variant="extendedFab" component="span" className={classes.marginUnit}>
                        <AttachFile className={classes.extendedIcon} />
                        Selecionar Arquivo
                    </Button>
                </label>
                <br />
                <FormControl className={classes.formControl} onChange={this.noChange()}>
                    <InputLabel htmlFor="name-disabled">Arquivo</InputLabel>
                    <Input id="name-disabled" value={this.state.selectedFile ? this.state.selectedFile.name : ''} />
                </FormControl>
                <br />
                <Button variant="extendedFab" className={classes.marginUnit} onClick={this.uploadHandler}>
                    <CloudUpload className={classes.extendedIcon} />
                    Processar Arquivo
                </Button>  
                <ResponsiveDialog text='Arquivo enviado com sucesso!' headerText='Enviado com sucesso!' open={this.state.alertSendOpen} />
                <ResponsiveDialog text='Por favor elecione um arquivo!' headerText='Selecione um arquivo' open={this.state.alertNoFileOpen} />
                <br /> 
            </div>
        )
    }
}

UploadSinapi.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(UploadSinapi);