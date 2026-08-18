import { useState, useEffect } from 'react';

export default function useWebSocket(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      if (parsed.type === 'metrics') {
        setData(parsed.data);
      }
    };
    return () => ws.close();
  }, [url]);

  return data;
}
