from aiohttp import web
from config.server_config import CONFIG

async def index(_):
    return web.FileResponse(CONFIG['files'] + './index.html')
