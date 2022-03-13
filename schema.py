from datetime import date
from pydantic import BaseModel
class Enfant(BaseModel):
    id = int
    nom = str
    prenom = str
    adresse = str
    date_naissance = str
    numero_national = str
    photo = bool

    class Config:
        orm_mode = True