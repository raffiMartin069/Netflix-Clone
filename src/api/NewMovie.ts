// api call
import axios from "axios";

const apiKey = import.meta.env.VITE_API;
const contentType = import.meta.env.VITE_CONTENT_TYPE;

const movieDataApiCall = async (url: string) => {
    const response = await axios.get(url, {
        headers: {
            Authorization: apiKey,
            'Content-Type': contentType,
        },
    });
    return response.data;
}

export default movieDataApiCall;