import React from 'react';

export default function ActivityFeed({ runs }) {
  return (
    <div className="activity-feed">
      {runs.slice(0, 5).map((run, i) => (
        <div key={i} className="feed-item">
          <span className="feed-time">{new Date(run.created_at).toLocaleTimeString()}</span>
          <span className="feed-text">Workflow <strong>{run.name}</strong> {run.status === 'in_progress' ? 'started' : `finished with status ${run.conclusion}`}</span>
        </div>
      ))}
    </div>
  );
}
