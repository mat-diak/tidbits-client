import axios from 'axios'

const instance = axios.create({
    baseURL: "https://snacks-server.herokuapp.com"
})

export default instance;