import axios from "axios";
const baseUrl = 'http://localhost:3001/api/persons'

export function getPersons() {
    return axios.get(baseUrl).then(response => {
        return response.data
    })
}

export function addPerson(obj) {
    return axios.post(baseUrl, obj).then(response => {
        return response.data
    })
}

export function deletePerson(id) {
    return axios.delete(`${baseUrl}/${id}`)
}

export function updatePerson(id, obj) {
    return axios.put(`${baseUrl}/${id}`, obj).then(response => {
        return response.data
    })
}