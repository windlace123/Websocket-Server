from datetime import datetime
from fastapi import APIRouter
import asyncio
import json
from app.core.redis_client import r
from app.config import START_TIME

router = APIRouter()

@router.post("/server_stats")
async def server_stats():
    try: # Checking server startup
        if r:
            server_all_stats: dict = {}

            server_all_stats["uptime"] = str(datetime.now() - START_TIME).split(':')
            server_all_stats["uptime"][2] = str(server_all_stats["uptime"][2].split('.')[0])
            print(server_all_stats)
            await asyncio.sleep(0.5)

            return server_all_stats

    except Exception as ex:
        print(f"Error: {ex}")
        return None