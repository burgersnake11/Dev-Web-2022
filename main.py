from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pkg_resources import require
import model as model
from database import SessionLocal, engine, session
from model import Enfant
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Depends, Request
from sqlalchemy.orm import Session
from fastapi.responses import HTMLResponse
from fastapi import Depends, FastAPI, Request, Form
import json
from model import Base
from sqlalchemy.orm import sessionmaker
from fastapi.encoders import jsonable_encoder
from starlette.responses import RedirectResponse, JSONResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:8001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="views")

# ****************************************************connection db*******************************************************
def get_database_session():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# ****************************************************connection db*******************************************************
@app.get("/", response_class=HTMLResponse)
async def give_home(request: Request, db: Session = Depends(get_database_session)):
    records = db.query(Enfant).all()
    return templates.TemplateResponse("home.html", {"request": request, "data": records})


@app.get("/mvp", response_class=HTMLResponse)
async def give_mvp(request: Request, db: Session = Depends(get_database_session)):
    records = db.query(model.Enfant).all()
    return templates.TemplateResponse("mvp.html", {"request": request, "data": records})


@app.get("/affichage")
async def afficher(db: Session = Depends(get_database_session)):
    records = db.query(model.Enfant).all()
    return records


@app.get("/formulaire", response_class=HTMLResponse)
async def read_movies(request: Request, db: Session = Depends(get_database_session)):
    records = db.query(Enfant).all()
    return templates.TemplateResponse("formulaire.html", {"request": request, "data": records})


@app.post("/mvp")
async def creer_enfant(nom_form: str = Form(...), prenom_form: str = Form(...), date_form: str = Form(...), numero_form: str = Form(...), db: Session = Depends(get_database_session)):
    # id: int = 2
    # new_enfant = {'id': id, 'nom': nom, 'prenom': prenom, 'adresse': adresse, 'date_naissance': date, 'numero_national': numero}
    # enfant_schema = model.Enfant()
    # print(enfant_schema)
    # dump_enfant = json.dumps(enfant_schema)
    # print(dump_enfant)
    # enfant_schema.load(dump_enfant, session=db)
    # db.add_all(new_enfant)
    # db.commit()
    # Base.metadata.create_all(engine)
    # SessionClass = sessionmaker(engine)  # Créer une classe pour créer une session
    # session = SessionClass()

    enfant1 = Enfant(nom_enfant=nom_form, prenom_enfant=prenom_form, ddn_enfant=date_form, numero_nationnal_enfant=numero_form)
    db.add(enfant1)
    db.commit()
    return "Formulaire envoyé !"
