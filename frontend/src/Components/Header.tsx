import React, { CSSProperties } from "react";
import logo from "../logos/logo.svg";
import profile from "../logos/profile.png";

export const Header = () => {
    const headerStyle = {
        height: "60px",
        backgroundColor: "#bedde138",
        boxShadow: "0 4px 2px 0 #a8c9d054",
        display: "flex",
        justifyContent: "space-between"
    }
    const logoStyle: CSSProperties = {
        marginLeft: "10px"
    }
    const profileStyle: CSSProperties = {
        height: "36px",
        width: "34px",
        borderRadius: "6px",
        margin: "8px",
        alignSelf: "flex-end"
    }
    const textStyle: CSSProperties = {
        position: "absolute",
        top: "20px",
        left: "66px",
    }
    return (
        <div style={headerStyle}>
            <img style={logoStyle} src={logo} alt="image" />
            <span style={textStyle}>Classroom</span>
            <img style={profileStyle} src={profile} alt="image" />
        </div>
    )
}