import React, { CSSProperties } from "react"
import Button from "@material-ui/core/Button"
import SimpleTable from './Table'
import FileService from "../Services/files.service"
import FileUpload from "./FileUploadModal"

let fileListStyle: CSSProperties = {
    backgroundColor: "white",
    height: "82vh",
    margin: "10px",
    width: "75%",
    borderRadius: "8px"
}

interface IState {
    files: [],
    modalShow: boolean
}
interface IProps {
    param: {id: string}
}

export class FileList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            files: [],
            modalShow: false
        }
    }

    showModal = () => {
        this.setState({ modalShow: true });
    };

    hideModal = () => {
        this.setState({ modalShow: false });
    };

    componentDidMount() {
        this.getFileList(this.props.param)
    }

    async getFileList(param: { id?: string | undefined }) {
        const files = await FileService.get(param.id)
        this.setState({ files: files.data })
    }

    render() {
        let { files, modalShow } = this.state

        return (
            <div style={fileListStyle}>
                <span style={{ margin: "24px", display: "inline-block" }}><strong>FILES AND FOLDERS</strong>
                </span>
                <FileUpload show={modalShow} handleClose={this.hideModal} getFileList={this.getFileList.bind(this)} param={this.props.param}/>
                <Button onClick={this.showModal} style={{ backgroundColor: "#51b984", color: "white", float: "right", margin: "20px" }}>Upload File</Button>
                <SimpleTable files={files} />

            </div>
        )
    }
}