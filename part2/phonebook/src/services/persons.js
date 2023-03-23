import axios from "axios";
const baseUrl = 'http://localhost:3002/persons'

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