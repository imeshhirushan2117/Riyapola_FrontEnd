import axios from "axios";

const token = localStorage.getItem('stmToken')

const instance = axios.create({
    baseURL: 'http://localhost:8080/admin',
    headers : {Authorization:`Bearer ${token}`}
  });

export default instance