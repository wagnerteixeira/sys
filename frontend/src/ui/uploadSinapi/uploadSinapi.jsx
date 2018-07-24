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

import  { post } from 'axios';


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
       this.state = {selectedFile: null, 
                    dialogOpen : false, 
                    headerTextDialog: '',
                    textDialog : '',
                    showDialogClose: true}
        this.uploadHandler = this.uploadHandler.bind(this)
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
        this.noChange = this.noChange.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
      }

    fileChangedHandler = (event) => {
        this.setState({...this.state, selectedFile: event.target.files[0]})
    }

    getTextDialogNoSelectFile(){
        return { 
                textDialog: 'Por favor selecione um arquivo!', 
                headerTextDialog : 'Selecione um arquivo',
                showDialogClose : true,
                dialogOpen : true
            }
    }

    getTextDialogSendingFile(){
        return { 
                textDialog: 'Aguarde um momento, enviando arquivo', 
                headerTextDialog : 'Aguarde...',
                showDialogClose : false,
                dialogOpen : true
            }
    }

    getTextDialogSuccessSend(){
        return { 
                textDialog: 'Arquivo enviado com sucesso!', 
                headerTextDialog : 'Enviado com sucesso!',
                showDialogClose : true,
                dialogOpen : true
            }
    }

    getTextDialogErrorSend(error){
        return { 
                textDialog: 'Erro ao enviar arquivo: ' + error, 
                headerTextDialog : 'Erro',
                showDialogClose : true,
                dialogOpen : true
            }
    }

    uploadHandler = () => { 
        this.getTextDialogSuccessSend()
        if (this.state.selectedFile) {
            this.setState({...this.state, ...this.getTextDialogSendingFile()})
            this.fileUpload(this.state.selectedFile).then(() => {
                this.setState({...this.state, selectedFile: null, ...this.getTextDialogSuccessSend()})
            }).catch(e => { 
                console.log(e)                
                this.setState({...this.state, ...this.getTextDialogErrorSend(e.message)})
            });    
        }
        else 
            this.setState({...this.state, ...this.getTextDialogNoSelectFile()})
                          
    }

    noChange() {

    } 


    handleCloseDialog() {
        this.setState({...this.state, dialogOpen: false}) 
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
                <ResponsiveDialog 
                    text={this.state.textDialog} 
                    headerText={this.state.headerTextDialog} 
                    open={this.state.dialogOpen} 
                    showClose={this.state.showDialogClose}
                    handleClose={this.handleCloseDialog}
                />
                <br /> 
            </div>
        )
    }
}

UploadSinapi.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(UploadSinapi);