import axios from "axios";

const backendUrl = `${import.meta.env.VITE_BACKEND}/api`;

export const backend = axios.create({
  baseURL: backendUrl,
  headers: { "Access-Control-Allow-Origin": backendUrl },
});
