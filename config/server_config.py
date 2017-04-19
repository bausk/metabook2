import os, sys

CONFIG = {}
path = os.path.dirname(os.path.dirname(sys.argv[0]))

if os.environ.get("ENV") == "production":
    CONFIG['files'] = path + "/dist"
else:
    CONFIG['files'] = path + "/dist"
