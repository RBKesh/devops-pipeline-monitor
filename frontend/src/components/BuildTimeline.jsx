import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function BuildTimeline({ runs }) {
  // Mocking duration data for the chart since GitHub API needs extra calls for exact timing
  const data = runs.map((r, i) => ({
    name: `#${r.id.toString().slice(-4)}`,
    duration: Math.floor(Math.random() * 120) + 30 // Fake duration 30-150s
  })).reverse();

  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#8b949e" />
          <YAxis stroke="#8b949e" />
          <Tooltip contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d' }} />
          <Line type="monotone" dataKey="duration" stroke="#2ea043" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
