import databases, sqlalchemy, uuid
from pydantic.errors import EmailError
from fastapi.param_functions import Query
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import engine
from sqlalchemy.sql.functions import user
from pydantic import BaseModel, Field
from typing import List

SQL_DB_URL = 'sqlite:///./users.db'
database = databases.Database(SQL_DB_URL)
metadata = sqlalchemy.MetaData()

users = sqlalchemy.Table(
    'users',
    metadata,
    sqlalchemy.Column('id', sqlalchemy.String, primary_key=True, index=True),
    sqlalchemy.Column('email', sqlalchemy.String),
    sqlalchemy.Column('f_name', sqlalchemy.String),
    sqlalchemy.Column('l_name', sqlalchemy.String),
    sqlalchemy.Column('presentation', sqlalchemy.String),
)
engine = sqlalchemy.create_engine(
    SQL_DB_URL
)
metadata.create_all(engine)

## Models
class User(BaseModel):
    id:             str
    email:          str
    f_name:         str
    l_name:         str
    presentation:   str
class UserCreate(BaseModel):
    email:          str = Field(..., example='email here')
    f_name:         str = Field(..., example='first name here')
    l_name:         str = Field(..., example='last name here')
class UserDelete(BaseModel):
    email: str = Field(..., example='email here')

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event('startup')
async def startup():
    await database.connect()

@app.on_event('shutdown')
async def shutdown():
    await database.disconnect()

# ---------------------------------------- GET ID ----------------------------------------
@app.get('/users/{user_id}', response_model=User)
async def read_user(user_Id: str):
    query = users.select().where(users.c.id == user_Id)
    return await database.fetch_one(query)

# ---------------------------------------- GET ----------------------------------------
@app.get('/users/', response_model=List[User])
async def read_users():
    query = users.select()
    return await database.fetch_all(query)

# ---------------------------------------- PUT ----------------------------------------
@app.put('/users/', response_model=User)
async def update_user(user: User):
    query = users.update().\
        where(users.c.id == user.id).\
        values(
            email = user.email,
            f_name = user.f_name,
            l_name = user.l_name,
            presentation = user.presentation
        )
    await database.execute(query)
    return await read_user(user.id)

# ---------------------------------------- POST ----------------------------------------
@app.post('/users/', response_model=User)
async def create_users(user: UserCreate):
    gId = str(uuid.uuid1())
    presentation = str('No presentation')
    query = users.insert().values(
        id = gId,
        email = user.email,
        f_name = user.f_name,
        l_name = user.l_name,
        presentation = presentation
    )
    await database.execute(query)
    return {
        'id': gId,
        **user.dict(),
        'presentation': 'No presentation'
    }

# ---------------------------------------- DELETE ----------------------------------------
@app.delete('/users/', response_model=UserDelete)
async def delete_user(user: UserDelete):
    query = users.delete().where(users.c.email == user.email)
    await database.execute(query)
    return {"email": user.email}

