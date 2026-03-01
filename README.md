# **MongoDB Log Anomaly & Security Monitor**

An **AI-powered monitoring system** that detects anomalies, security threats, and performance issues from MongoDB logs using **Machine Learning** and real-time analysis.

---

## **Problem Statement**

MongoDB environments generate a large volume of logs that are difficult to monitor manually. Critical issues such as:

* Slow queries
* Unauthorized access attempts
* System failures
* Performance degradation

often go unnoticed until they affect system availability or security.

---

## **Solution**

This project provides an automated system that:

* Analyzes MongoDB log data
* Detects abnormal patterns using **Machine Learning (Isolation Forest)**
* Identifies performance-related anomalies
* Displays insights through an interactive monitoring dashboard

---

## **Key Features**

* **AI-based anomaly detection**
* **Automated log analysis**
* **Performance issue identification**
* **Interactive dashboard visualization**
* **Lightweight and easy to deploy**
* **Backend API for processed log data**

---

## **Technology Stack**

```
Frontend   : HTML, JavaScript
Backend    : Node.js, Express.js
AI Engine  : Python, Scikit-learn
Data       : JSON-based log storage
Algorithm  : Isolation Forest
```

---

## **How It Works**

```
Step 1: Sample MongoDB logs are collected
Step 2: Python AI engine processes logs
Step 3: Isolation Forest detects anomalies based on response time
Step 4: Processed results are stored as output_logs.json
Step 5: Node.js backend exposes API
Step 6: Dashboard fetches and displays anomaly insights
```

---

## **Output**

* Total number of logs
* Number of detected anomalies
* Log-level anomaly status (Yes / No)
* Interactive dashboard table

---

## **Project Structure**

```
mongodb-log-anomaly-monitor/
│
├── data/
│   ├── sample_logs.json
│   └── output_logs.json
│
├── ai-engine/
│   └── anomaly_detection.py
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   └── script.js
│
├── requirements.txt
└── README.md
```

---

## **How to Run the Project**

### **1. Install Python Dependencies**

```
pip install -r requirements.txt
```

### **2. Run AI Engine**

```
python ai-engine/anomaly_detection.py
```

### **3. Start Backend**

```
cd backend
npm install
node server.js
```

Backend will run at:

```
http://localhost:5000
```

### **4. Open Dashboard**

Open in browser:

```
frontend/index.html
```

---

## **Business Impact**

* Reduces database downtime
* Enables proactive issue detection
* Saves manual monitoring effort
* Improves operational efficiency
* Enhances database security monitoring

---

## **Future Enhancements**

* Real-time log streaming using Kafka
* NLP-based log message classification
* Email / SMS alert system
* Docker containerization
* Kubernetes deployment
* MongoDB integration for live environments

---

## **Skill Tags**

```
Machine Learning | Python | MongoDB | Node.js | Express | AI Monitoring | Log Analysis | Cloud-Native Concepts
```

---

## **Author**

**Jahnavi**
*CSE | AI & Cloud Enthusiast*
