import React, { Component } from 'react'

export default class FileSelector extends Component {
    state = {selectedFile: null}

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = () => { 
        console.log(this.state.selectedFile)
    }
    
    render() {
        return (
            <div>
                <input 
                    type="file" 
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    onChange={this.fileChangedHandler} 
                />
                <button onClick={this.uploadHandler}>Upload!</button>
            </div>        
        )
    }
}