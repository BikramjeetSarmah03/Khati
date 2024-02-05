import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000/api/v1";

export const api = axios.create({
  baseURL: BACKEND_URL,
});
