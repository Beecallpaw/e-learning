import { Router, Request, Response } from "express"
import { Course } from "../Models/Course"
import { validate, getCourse } from "../Service/middleware"
import { File } from "../Models/File"
import path from 'path'

const router = Router()
const uploadPath = path.resolve(__dirname, '../..')

router.get("/",
    async (req: Request, res: Response) => {
        try {
            const courses = await Course.find();
            if (!courses) {
                return res.status(404).json({ message: "Sorry there are no courses available." })
            }
            res.json(courses)
        } catch (err) {
            res.send("Error")
        }
    }
)

router.post("/", validate, async (req: Request, res: Response) => {
    try {
        await Course.create(req.body)
        res.json({ message: "Course successfully created." })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.get("/:id", getCourse,
    async (req: Request, res: any) => {
        res.json(res.course)
    }
)
router.put("/:id", getCourse, async (req: Request, res: any) => {
    try {
        await Course.update(res.course, req.body);
        res.json({ message: "Course successfully updated." });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getCourse,
    async (req: Request, res: any) => {
        try {
            await res.course.deleteOne()
            res.json({ message: "Course successfully deleted." })
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
)

router.get("/:id/files", async (req: Request, res: Response) => {
    try {
        const files = await File.find({ course_id: req.params.id })
        if (!files) {
            return res.status(404).json({ message: "Sorry there are no files available." })
        }
        res.json(files)
    } catch (err) {
        res.send("Error")
    }
})

router.post("/:id", async (req: any, res: Response) => {
    try {
        let files = req.files.file
        let course_id = req.params.id
        if(Array.isArray(files)){
            for (const file of files) {
                await File.create({
                    course_id,
                    filename: file.name,
                    size: file.size
                })
            }
            files.forEach((file:any) => {
                file.mv(`${uploadPath}/uploads/${file.name}`, (err: any) => {
                   console.log(err)
                } )

            })
        } else {
             await File.create({
                    course_id,
                    filename: files.name,
                    size: files.size
                })
            files.mv(`${uploadPath}/uploads/${files.name}`, (err: any) => {
                console.log(err)
            })
        }

        res.json("successful")
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.get('/file/:id/:filename', async (req, res) => {
    try{
        const {id, filename} = req.params
        const file = await File.find({course_id: id, filename})
        if(file.length){
            res.download(`${uploadPath}/${filename}`)

        }
    }catch(err) {
        return res.status(500).json({message: err.message})
    }
})

module.exports = router;