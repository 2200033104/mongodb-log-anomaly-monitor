import pandas as pd
from sklearn.ensemble import IsolationForest

# Load logs
data = pd.read_json('../data/sample_logs.json')

# Feature for anomaly detection
X = data[['response_time']]

model = IsolationForest(contamination=0.3, random_state=42)
data['anomaly'] = model.fit_predict(X)
data['anomaly'] = data['anomaly'].apply(lambda x: 1 if x == -1 else 0)

# Save output
data.to_json('../data/output_logs.json', orient='records', indent=2)

print("Anomaly detection completed!")
print(data)
