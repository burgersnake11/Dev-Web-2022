from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
import model
import schema
from database import SessionLocal, engine
from model import enfant
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Depends, Request
from sqlalchemy.orm import Session
from fastapi.responses import HTMLResponse
from fastapi import Depends, FastAPI, Request, Form
from starlette.responses import RedirectResponse, JSONResponse

app = FastAPI()

model.Base.metadata.create_all(bind=engine)
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")



#****************************************************connection db*******************************************************
def get_database_session():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()




#****************************************************connection db*******************************************************
@app.get("/", response_class=HTMLResponse)
async def read_movies(request: Request, db: Session = Depends(get_database_session)):
    records = db.query(model.enfant).all()
    return templates.TemplateResponse("home.html", {"request": request, "data": records})

@app.get("/mvp", response_class=HTMLResponse)
async def give_mvp(request: Request, db: Session = Depends(get_database_session)):
    records = db.query(model.enfant).all()
    return templates.TemplateResponse("mvp.html", {"request": request, "data": records})


@app.get("/formulaire", response_class=HTMLResponse)
async def give_formulaire(request: Request, db: Session = Depends(get_database_session)):
    records = db.query(model.enfant).all()
    return templates.TemplateResponse("formulaire.html", {"request": request, "data": records})

@app.post("/mvp")
async def creer_enfant(db: Session = Depends(get_database_session), nom: schema.Enfant.nom = Form(...), prenom: schema.Enfant.prenom = Form(...), adresse: schema.Enfant.adresse = Form(...), date: schema.Enfant.date_naissance = Form(...), numero: schema.Enfant.numero_national = Form(...)):
    id1 = 10
    nom1 = "Carlier"
    prenom1 = "Logan"
    adresse1 = "Rue Hanzée"
    date1 = "06/06/1999"
    numero1 = "123456"
    enfant = schema.Enfant(id=id1, nom=nom1, prenom=prenom1, adresse=adresse1, date_naissance=date1, numero_national=numero1)
    db.add(enfant)
    db.commit()
    response = RedirectResponse('/', status_code=303)
    return response




