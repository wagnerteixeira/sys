import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CloudUpload from '@material-ui/icons/CloudUpload';
import AttachFile from '@material-ui/icons/AttachFile';


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
    state = {selectedFile: null}

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = () => { 
        console.log(this.state.selectedFile)
    }

    noChange() {

    }

    render() {
        const { classes } = this.props; 
        console.log(this.state.selectedFile)
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
                <Button variant="extendedFab" className={classes.marginUnit}>
                    <CloudUpload className={classes.extendedIcon} />
                    Processar Arquivo
                </Button>  
                <br /> 
            </div>
        )
    }
}

UploadSinapi.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(UploadSinapi);