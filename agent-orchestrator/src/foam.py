import foam
from fastapi import FastAPI

foam.init(
    service_name="agent-orchestrator",
    api_key=os.getenv("FOAM_API_KEY"),
    environment="production" if os.getenv("ENV") == "prod" else "development",
)

app = FastAPI()
