from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
import model
import schema
from database import SessionLocal, engine
from model import Enfant
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
    records = db.query(Enfant).all()
    return templates.TemplateResponse("home.html", {"request": request, "data": records})


@app.get("/formulaire", response_class=HTMLResponse)
async def read_movies(request: Request, db: Session = Depends(get_database_session)):
    records = db.query(Enfant).all()
    return templates.TemplateResponse("formulaire.html", {"request": request, "data": records})





