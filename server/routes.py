from .views import index
from config.server_config import CONFIG


def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_static('/', CONFIG['files'])
