import React from "react";
import { FileList } from "./FileList";
import { Sidebar } from "./Sidebar";
import { useParams, Link } from "react-router-dom";

export const CourseDetail = () => {
    let detailStyle = {
        display: "flex"
    }
    let linkStyle = {
        textDecoration: "none",
        color: "#51b984"
    }
    let parameter: {id: string} = useParams()
    return (
        <>
            <div style={{ margin: "12px" }}>
                <Link style={linkStyle} to='/'> COURSE </Link> / &nbsp;
                <Link style={linkStyle} to="#"> COURSE NAME</Link>
            </div>
            <div style={detailStyle}>
                <Sidebar />
                <FileList param={parameter} />
            </div>
        </>
    )
}


