import axios from "axios";

export const api = axios.create({
    baseURL: "https://backendpractice-dimo.onrender.com/product/"
})