
import http from '../helpers/http-common'

class FilesDataService {
    get(id: number) {
        return http.get(`/courses/${id}/files`)
    }

    create(id: number, data: any) {
        return http.post(`/courses/${id}`, data)
    }
}

export default new FilesDataService()