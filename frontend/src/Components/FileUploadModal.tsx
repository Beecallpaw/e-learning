import React from 'react'
import FileService from "../Services/files.service"
import Dropzone from 'react-dropzone'
import "../modal.css"

interface IProps {
    show: boolean,
    handleClose: () => void,
    param: { id: string }
}

interface IState {
    files: []
}

class FileUpload extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            files: []
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onImageDrop = this.onImageDrop.bind(this)
    }
    handleSubmit() {
        let data = new FormData();
        this.state.files.forEach((file, index) => {
            console.log(file)
            data.append('file', file)
        });

        FileService.create(this.props.param.id, data)
    }
    onImageDrop(files: []) {
        this.setState({ files })
    }
    render() {
        let { files } = this.state
        return (this.props.show &&
            <div className="modal">
                <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#6ec8d338", padding: "10px" }}>
                    <div style={{ float: "left" }}>Upload Files</div>
                    <a onClick={this.props.handleClose}>X</a>
                </div>
                <Dropzone
                    multiple
                    onDrop={this.onImageDrop}
                >
                    {({ getRootProps, getInputProps }) => {
                        return <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div>
                                    <div style={{ textAlign: "center" }}>Drag and drop or <span style={{ color: "#51b984" }}>Browse</span> files</div>
                                    <span style={{ color: "#0b0c01ab" }}>
                                        pdf, pptx, docx, xlsx, jpg, jpeg png files only (Max files size 50MB)
                                </span>
                                </div>
                            </div>
                        </section>
                    }}
                </Dropzone>
                <div>
                    {files.length>0 && files.map((file: {name:string, size:string}, key) => (
                        <p key={key}>
                            <input contentEditable type="text" value={file.name} />{file.size} bytes <a>Delete</a>
                        </p>
                    )
                    )
                    }
                </div>
                <a onClick={this.props.handleClose}>Cancel</a>
                <button onClick={this.handleSubmit}>Done</button>
            </div>
        )
    }
}

export default FileUpload