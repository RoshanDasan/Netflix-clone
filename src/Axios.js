import axios from 'axios'
import {baseURL} from './components/Constants/Constants'

export const instance = axios.create({
    baseURL: baseURL
})