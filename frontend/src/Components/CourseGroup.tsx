import React from 'react'
import Card from './Card'

interface IProps {
    courses: []
}
const CourseGroup = (props: IProps) => {
    let cardGroup = {
        backgroundColor: "white",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        height: "80vh"
    }
    let { courses } = props
    let loading = (courses.length) ? false : true

    return (
        <div style={cardGroup}>
            <div style={{ margin: "16px" }}>CURRENT SEMESTER COURSES</div>
            {!loading &&
                <div style={{ display: "flex", flexDirection: "row", alignContent: "flex-start" }}>
                    {courses.map((course, key) => <Card course={course} key={key} />)}
                </div>
            }
        </div>
    )
}

export default CourseGroup