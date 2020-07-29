
import http from '../helpers/http-common'

class FilesDataService {
    get(id?: string) {
        return http.get(`/courses/${id}/files`)
    }

    create(id: string, data: any) {
        return http.post(`/courses/${id}`, data)
    }
}

export default new FilesDataService()