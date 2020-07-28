import React, { CSSProperties } from "react"
import Button from "@material-ui/core/Button"
import SimpleTable from './Table'
import { useParams } from 'react-router-dom'
import FileService from "../Services/files.service"

let fileListStyle: CSSProperties = {
    backgroundColor: "white",
    height: "82vh",
    margin: "10px",
    width: "75%",
    borderRadius: "8px"
}

interface IState {
    files: []
}
interface IProps {
    param: {}
}

export class FileList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            files: []
        }
    }

    componentDidMount() {
        this.getFileList(this.props.param)
    }

    async getFileList(param: {id?: string | undefined}) {
        const files = await FileService.get(param.id)
        console.log(files.data)
        this.setState({files: files.data})
    }
    render() {
        let {files} = this.state

        return (
            <div style={fileListStyle}>
                <span style={{ margin: "24px", display: "inline-block" }}><strong>FILES AND FOLDERS</strong>
                </span>
                <Button style={{ backgroundColor: "#51b984", color: "white", float: "right", margin: "20px" }}>Upload File</Button>
                <SimpleTable files={files}/>
            </div>
        )
    }
}