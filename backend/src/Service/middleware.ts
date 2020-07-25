import { Request, Response, NextFunction } from "express"
import { Course } from "../Models/Course"

export async function validate(req: Request, res: Response, next: NextFunction) {
    let errors: any = {};
    let { name, semester } = req.body
    if (!name) {
        errors['name'] = "Name is required"
    }
    if (!semester) {
        errors['semester'] = "Semester is required."
    }
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors)
    }
    next()
}

export async function getCourse(req: Request, res: any, next: NextFunction) {
    let course;

    try {
        course = await Course.findById(req.params.id);
        if (course == null) {
            return res.status(404).json({ message: "Course not found." })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.course = course

    next();
}