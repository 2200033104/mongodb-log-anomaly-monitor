const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/logs", (req, res) => {
    const data = JSON.parse(fs.readFileSync("../data/output_logs.json"));
    const total = data.length;
    const anomalies = data.filter(log => log.anomaly === 1).length;

    res.json({
        totalLogs: total,
        anomalies: anomalies,
        logs: data
    });
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});
