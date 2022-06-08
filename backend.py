from enum import Enum
import json
import uuid
import random
from fastapi import Body, FastAPI, Header, Path, Query
from pydantic import BaseModel
from typing import Optional, Union


class Timer(BaseModel):
    max_daily_play: Optional[int] = 0
    max_play_break: Optional[int] = 0  # 50-90mins
    min_break: Optional[int] = 0  # >=5, but 15-20 recommended


class Organization(BaseModel):
    full_name: str
    abbreviation: str
    id: Optional[str]
    play_enabled: Optional[bool] = True
    timers_enabled: Optional[bool] = True


class User(BaseModel):
    full_name: str
    display_name: str
    password: str
    profile_picture_url: Optional[str]
    parent_organization_id: Optional[str]
    id: Optional[str]
    admin: bool = False
    api_key: Optional[str]


class Group(BaseModel):
    name: str
    effective_dates: Optional[str]  # 06/07/2022 12:00 AM - 06/07/2022 11:59 PM
    timer: Timer
    recording_mode: str  # Regular, Fullscreen
    recording_pre: int = 3
    recording_post: int = 3
    recording_enabled: bool = True
    active: bool = True
    id: Optional[str]


class Login(BaseModel):
    username: str
    password: str
    remember_me: Optional[bool]


DATABASE = json.load(open('db.json'))
COMMON_WORDS = json.load(open('common.json'))['commonWords']
TRUNCATED_WORDS = [x for x in COMMON_WORDS if 5 >= len(x) >= 3]
CHARSET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
           'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

TAG_META = [
    {'name': 'API Base', 'description': 'The API Base'},
    {'name': 'Organizations', 'description': 'Organizations'},
    {'name': 'Users', 'description': 'Standard Users & Admins'},
    {'name': 'Access Codes', 'description': 'Access Codes'},
    {'name': 'Groups', 'description': 'Groups'}
]


def check_access(api_key: str):
    if not api_key:
        return
    for usr in DATABASE['users']:
        if usr['api_key'] == api_key:
            return usr['admin']
    return False


def write_db(object: str, object_data: any):
    global DATABASE
    obj = dict(object_data)
    obj['id'] = str(uuid.uuid4())
    if object == 'users':
        obj['api_key'] = ''.join(((random.choice(CHARSET).upper()) if random.choice(
            [True, False]) else random.choice(CHARSET)) for x in range(64))
    DATABASE[object].append(obj)
    open('db.json', 'w').write(json.dumps(DATABASE, indent=4))
    return obj


app = FastAPI(title='Healthy Player One', version='1.0', openapi_tags=TAG_META)


@app.get('/', tags=['API Base'])
def server_status():
    return {'success': True, 'message': 'Server is alive and well!'}


@app.get('/orgs', tags=['Organizations'])
def get_organizations(authorization: Union[str, None] = Header(default=None)):
    if not authorization:
        return {'error': 'You do not have authorization to access this data.'}
    for usr in DATABASE['users']:
        if usr['admin'] and usr['api_key'] == authorization:
            return DATABASE['orgs']


@app.post('/orgs', tags=['Organizations'])
def create_organization(org_info: Organization, authorization: Union[str, None] = Header(default=None)):
    if not check_access(authorization):
        return {'error': 'You do not have authorization'}
    org_info = dict(org_info)
    code = [random.choice(TRUNCATED_WORDS) for x in range(2)]
    code.append(str(random.randint(1, 99)))
    org_info['access_code'] = '-'.join(code)
    callback = write_db('orgs', org_info)
    return callback


@app.post('/users', tags=['Users'])
def create_user(user_info: User = Body(None, description="User info"), authorization: Union[str, None] = Header(default=None)):
    if not check_access(authorization):
        return {'error': 'You do not have authorization'}
    if not user_info:
        return {'error': 'No user information provided.'}
    callback = write_db('users', user_info)
    return callback


@app.get('/users', tags=['Users'])
def get_users(authorization: Union[str, None] = Header(default=None)):
    if not authorization:
        return {'error': 'You do not have authorization to access this data.'}
    for usr in DATABASE['users']:
        if usr['admin'] and usr['api_key'] == authorization:
            return DATABASE['users']
    return {'error': 'You do not have authorization to access this data.'}


@app.get('/access_codes/{access_code}', tags=['Organizations', 'Access Codes'])
def get_organization(access_code: str = Path(None, description="The access code")):
    for org in DATABASE['orgs']:
        if org['access_code'] == access_code:
            return org
    return {'error': 'No matching organizations found.'}


@app.post('/groups', tags=['Groups'])
def create_group(group_info: Group, authorization: Union[str, None] = Header(default=None)):
    if not check_access(authorization):
        return {'error': 'You do not have authorization to access this data.'}
    group_info.timer = dict(group_info.timer)
    group_info = dict(group_info)
    write_db('groups', group_info)
    return group_info
