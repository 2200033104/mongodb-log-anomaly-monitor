fetch("http://localhost:5000/logs")
.then(res => res.json())
.then(data => {
    document.getElementById("summary").innerText =
        "Total Logs: " + data.totalLogs +
        " | Anomalies: " + data.anomalies;

    const table = document.getElementById("table");

    data.logs.forEach(log => {
        const row = table.insertRow();
        row.insertCell(0).innerText = log.message;
        row.insertCell(1).innerText = log.response_time;
        row.insertCell(2).innerText = log.anomaly ? "Yes" : "No";
    });
});
