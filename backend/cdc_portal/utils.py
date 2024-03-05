import json
from rest_framework.permissions import IsAdminUser


class IsSuperUser(IsAdminUser):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser)


def get_config():
    config_map = {}
    with open("./config/main.json", "r") as read_file:
        config_map = json.load(read_file)
    return config_map


def edit_config(config_map):
    with open("./config/main.json", "w") as outfile:
        json.dump(config_map, outfile)


def get_config_value(key):
    config_map = get_config()
    return config_map[key]
