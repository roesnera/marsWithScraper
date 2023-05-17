import { useEffect, useState } from "react";
import axios from "axios";


function MetricsSection() {
    const [metrics, setMetrics] = useState({likes: "120.4k",followers:"5410"});

    const fetchMetrics = async () => {
        try {
            const metrics = await axios("http://localhost:3001/metrics/0");
            // console.log(metrics.data);
            setMetrics(metrics.data);
        } catch (err) {
            console.log(err, "using fallback metrics");
        }
    }

    useEffect(() => {
        fetchMetrics();
    }, []);


    return (<section className="section metrics-section">
    <h2 className="section-title">metrics</h2>
    <div className="metric-box">
        <p>{metrics.followers} tiktok followers</p>
        <p>{metrics.likes} likes</p>
        <p>1.8k instagram followers</p>
    </div>
    <div className="darken">
        <p className="flex-container darken-flex">
            <span className="darken-flex-item">13.4% engagement</span> 
            <span className="darken-flex-item">96% female</span>
        </p>
    </div>
    <h4 className="metric-subtitle">target audience:</h4>
    <p>young women and queer individuals who are passionate about self expression. this includes fashion, astrology, and makeup. experiencing a sense of magic and childlike wonder in their everyday.</p>
</section>)
}

export default MetricsSection;