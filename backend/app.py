import asyncio
from fastapi import FastAPI, WebSocket
from .github_client import get_workflows
from .metrics_collector import get_system_metrics
import json

app = FastAPI(title="DevOps Pipeline Monitor")

@app.get("/api/pipelines")
def list_pipelines():
    return [{"owner": "RBKesh", "repo": "devops-pipeline-monitor"}]

@app.get("/api/pipelines/{owner}/{repo}/runs")
def get_pipeline_runs(owner: str, repo: str):
    return get_workflows(owner, repo)

@app.get("/api/metrics")
def get_metrics():
    return get_system_metrics()

@app.post("/api/webhooks/github")
async def github_webhook(payload: dict):
    # In a real app, parse the payload and update local DB
    return {"status": "received"}

@app.websocket("/ws/live")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            # Broadcast system metrics every 5 seconds
            metrics = get_system_metrics()
            await websocket.send_text(json.dumps({"type": "metrics", "data": metrics}))
            await asyncio.sleep(5)
    except Exception as e:
        print(f"WebSocket connection closed: {e}")
