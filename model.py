from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text
from database import Base
class Enfant(Base):
    __tablename__ = "Enfant"
    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String(20), unique=True)
    prenom = Column(String(20), unique=True)
    adresse = Column(Text())
    date_naissance = Column(String(20))
    numero_national = Column(String(100))

class Responsable(Base):
    __tablename__ = "Responsable"
    id = Column(Integer, primary_key=True, index=True)
    responsable = Column(String(10), unique=True)
    nom_reponsable = Column(String(20), unique=True)
    prenom_responsable = Column(String(20), unique=True)
    tel_fix_responsable = Column(Integer(9))
    tel_gsm_responsable = Column(Integer(10))
    adresse_responsable = Column(Text())
    email_responsable = Column(Text())
