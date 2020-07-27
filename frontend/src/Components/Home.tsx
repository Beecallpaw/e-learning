import React from "react";
import CourseService from "../Services/course.service"
import CourseGroup from "./CourseGroup";

interface IState {
    courses: []
}

class Home extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        this.getCourseList()
    }

    async getCourseList() {
        const courses = await CourseService.getAll()
        this.setState({ courses: courses.data })
    }

    render() {
        let { courses } = this.state

        return (
            <div>
                <div style={{ margin: "16px" }}>Courses</div>
                <CourseGroup courses={courses} />
            </div>
        )
    }

}


export default Home