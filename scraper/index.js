import getTikTokMetrics from "./getTikTokMetrics.js";
import axios from "axios";

const putMetrics = async () => {
    const metrics = await getTikTokMetrics();
    axios.put('http://localhost:3001/metrics/0', {"likes": metrics[2], 'followers': metrics[1]});
}

// putMetrics();

setInterval(putMetrics, 10000);