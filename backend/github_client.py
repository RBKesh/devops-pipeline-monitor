import httpx
import os

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")

def get_workflows(owner: str, repo: str):
    headers = {"Accept": "application/vnd.github.v3+json"}
    if GITHUB_TOKEN:
        headers["Authorization"] = f"token {GITHUB_TOKEN}"
    
    url = f"https://api.github.com/repos/{owner}/{repo}/actions/runs"
    
    # Using public data if no token
    try:
        response = httpx.get(url, headers=headers)
        if response.status_code == 200:
            runs = response.json().get("workflow_runs", [])
            return [{"id": r["id"], "name": r["name"], "status": r["status"], "conclusion": r["conclusion"], "created_at": r["created_at"]} for r in runs[:10]]
        return []
    except Exception as e:
        print(f"Error fetching GitHub data: {e}")
        return []
