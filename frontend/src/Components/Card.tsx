import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

interface IProps {
    course: { name: string, _id: number, semester: string, start_date: string }
}

const Card = (props: IProps) => {
    const cardStyle: CSSProperties = {
        width: "22%",
        height: "200px",
        boxShadow: "rgba(168, 201, 208, 0.33) 0px 0px 2px 2px",
        borderRadius: "6px",
        margin: "10px"
    }
    const linkStyle: CSSProperties = {
        textDecoration: "none",
        color: "black"
    }
    const titleStyle: CSSProperties = {
        height: "85px",
        background: "rgb(104, 164, 153)",
        borderRadius: "6px",
        clipPath: "polygon(0px 0px, 100% 0px, 100% 96%, 0px 75%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    let { course } = props

    return (
        <div style={cardStyle}>
            <Link style={linkStyle} to={`/detail/${course._id}`}>
                <div>
                    <div style={titleStyle}>
                        <div style={{ color: "white", fontSize: "18px" }}>{course.name}</div>
                    </div>
                    <strong style={{ marginLeft: "20px" }}>Course Name</strong>
                    <ul style={{ listStyleType: "none", marginLeft: "-16px" }}>
                        <li>{course.name}</li>
                        <li>Semester: {course.semester} </li>
                        <li>Start Date: {moment(course.start_date).format('MMM D, YYYY')} </li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default Card