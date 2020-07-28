import React, { CSSProperties } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {

    let sidebarStyle : CSSProperties = {
        backgroundColor: "white",
        height: "82vh",
        margin: "10px",
        width: "25%",
        borderRadius: "8px"
    }

    let filesStyle : CSSProperties = {
        border:"1px solid #51b984",
        borderRight: "5px solid #51b984",
        padding:"16px",
        borderRadius: "6px",
        margin: "8px",
        color: "#51b984"

    }
    return (
        <div style={sidebarStyle}>
            <div style={filesStyle}><FontAwesomeIcon icon={faFile} style={{color:"#51b984", marginRight:"10px"}} />Files</div>
        </div>
    )
}