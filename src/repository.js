import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "content-type": "application/json" }
});

export default class Repository {
    getBestBeer(temperature) {
        return axiosInstance.post("/best-style", { temperature: temperature });
    }
}