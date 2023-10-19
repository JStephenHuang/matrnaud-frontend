import axios from "axios";

const backendUrl = `${import.meta.env.VITE_BACKEND}/api`;
// const backendUrl = "https://matrnaud-backend.vercel.app";

export const backend = axios.create({
  baseURL: backendUrl,
  headers: { "Access-Control-Allow-Origin": backendUrl },
});
