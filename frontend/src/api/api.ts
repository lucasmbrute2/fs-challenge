import axios from "axios";

export const api = axios.create({
  baseURL: `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}`
})