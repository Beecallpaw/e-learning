import http from '../helpers/http-common'

class CourseDataService {
    getAll() {
        return http.get("/courses")
    }

    get(id: number) {
        return http.get(`/courses/${id}`)
    }

    create(data: any) {
        return http.post("/courses", data)
    }

    update(id: number, data: any) {
        return http.put(`/courses/${id}`, data);
    }

    delete(id: number) {
        return http.delete(`/courses/${id}`);
    }
}

export default new CourseDataService()