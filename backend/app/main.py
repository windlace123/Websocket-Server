from datetime import datetime
from fastapi import FastAPI

from app.api.websocket import router as websocket_router
from app.api.front_endpoints import router as front_endpoints_router
from app.config import START_TIME

app = FastAPI()

app.include_router(websocket_router)

app.include_router(front_endpoints_router)