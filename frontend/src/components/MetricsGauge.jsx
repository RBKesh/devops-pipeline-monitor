import React from 'react';

export default function MetricsGauge({ title, value }) {
  const dashArray = 283;
  const dashOffset = dashArray - (dashArray * value) / 100;

  return (
    <div className="gauge-container">
      <h3>{title}</h3>
      <svg className="gauge-svg" viewBox="0 0 100 100">
        <circle className="gauge-bg" cx="50" cy="50" r="45" />
        <circle 
          className="gauge-fill" 
          cx="50" cy="50" r="45" 
          strokeDasharray={dashArray} 
          strokeDashoffset={dashOffset} 
        />
      </svg>
      <div className="gauge-value">{value.toFixed(1)}%</div>
    </div>
  );
}
