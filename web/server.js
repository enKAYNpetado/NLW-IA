import axios from "axios"
// serve para conectar o backend com o frontend

export const server = axios.create({
  baseURL: "http://localhost:3333",
})