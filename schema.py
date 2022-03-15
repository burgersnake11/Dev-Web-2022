from datetime import date
from pydantic import BaseModel
from database import Base
class Enfant(BaseModel):
    __tablename__ = "enfant"
    id = int
    nom = str
    prenom = str
    adresse = str
    date_naissance = int
    numero_national = int

    class Config:
        orm_mode = True

#VALEUR du name du champ html = valeur de ce que le schema doit prendre