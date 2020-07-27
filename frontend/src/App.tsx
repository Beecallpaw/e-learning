import React from 'react';
import { Header } from './Components/Header';
import CourseDataService from "./Services/course.service";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CourseDetail } from './Components/CourseDetail';
import Home from './Components/Home';

interface IProps { }

interface ICourse {
    name: string,
    semester: string,
    start_date: string
}
interface IState {
    courses: ICourse[]
}
export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }
    courses: ICourse[] = [];

    componentDidMount() {
        this.getAllCourses()
    }

    async getAllCourses() {
        let courses = await CourseDataService.getAll()
        this.setState({ courses: courses.data })
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

