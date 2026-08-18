import React from 'react';

export default function PipelineCard({ run }) {
  const isRunning = run.status === 'in_progress';
  const isSuccess = run.conclusion === 'success';
  const isFailure = run.conclusion === 'failure';
  
  let statusClass = 'pending';
  if (isRunning) statusClass = 'running pulse-animation';
  else if (isSuccess) statusClass = 'success';
  else if (isFailure) statusClass = 'failure';

  return (
    <div className={`pipeline-card ${statusClass}`}>
      <div className="pipeline-header">
        <strong>{run.name}</strong>
        <span className="badge">{isRunning ? 'Running' : run.conclusion || run.status}</span>
      </div>
      <div className="pipeline-meta">
        <small>ID: #{run.id}</small>
        <small>{new Date(run.created_at).toLocaleString()}</small>
      </div>
    </div>
  );
}
