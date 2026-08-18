import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PipelineCard from './components/PipelineCard';
import MetricsGauge from './components/MetricsGauge';
import BuildTimeline from './components/BuildTimeline';
import ActivityFeed from './components/ActivityFeed';
import useWebSocket from './hooks/useWebSocket';
import './App.css';

function App() {
  const [runs, setRuns] = useState([]);
  const metrics = useWebSocket('ws://localhost:8000/ws/live');

  useEffect(() => {
    const fetchRuns = () => {
      // In a real app, you'd fetch the repo list first, but we hardcode for demo
      axios.get('/api/pipelines/RBKesh/devops-pipeline-monitor')
        .then(res => setRuns(res.data))
        .catch(err => console.error("Could not fetch runs", err));
    };
    
    fetchRuns();
    const interval = setInterval(fetchRuns, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>DevOps Pipeline Monitor</h1>
        <div className="status-indicator">
          <span className="dot pulse"></span> Live System
        </div>
      </header>
      
      <main className="dashboard-grid">
        <section className="metrics-section card">
          <h2>System Health</h2>
          <div className="gauges-container">
            <MetricsGauge title="CPU Usage" value={metrics?.cpu_percent || 0} />
            <MetricsGauge title="Memory" value={metrics?.memory_percent || 0} />
          </div>
        </section>

        <section className="pipelines-section card">
          <h2>Recent Builds</h2>
          <div className="pipeline-list">
            {runs.length === 0 ? <p>Loading builds...</p> : runs.map(run => (
              <PipelineCard key={run.id} run={run} />
            ))}
          </div>
        </section>

        <section className="chart-section card">
          <h2>Build History</h2>
          <BuildTimeline runs={runs} />
        </section>

        <section className="activity-section card">
          <h2>Activity Feed</h2>
          <ActivityFeed runs={runs} />
        </section>
      </main>
    </div>
  );
}

export default App;
