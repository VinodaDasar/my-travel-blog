import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3090/just-trav'
})

export default axios