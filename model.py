from sqlalchemy import Table
from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text
from database import Base

class enfant(Base):
    __table__ = Table('enfant', Base.metadata,
        Column('id', Integer, primary_key=True),
        Column('nom', String(20)),
        Column('prenom', String(20)),
        Column('adresse', Text),
        Column('date_naissance', String(20)),
        Column('numero_national', String(100))
    )



# class enfant(Base): #en minuscule
#     __tablename__ = "Enfant"
#     id = Column(Integer, primary_key=True, unique=True)
#     nom = Column(String(20))
#     prenom = Column(String(20))
#     adresse = Column(Text)
#     date_naissance = Column(String(20))
#     numero_national = Column(String(100))

# class Responsable(Base):
#     __tablename__ = "Responsable"
#     id = Column(Integer, primary_key=True, unique=True)
#     responsable = Column(String(10), unique=True)
#     nom_reponsable = Column(String(20), unique=True)
#     prenom_responsable = Column(String(20), unique=True)
#     tel_fix_responsable = Column(Integer(9))
#     tel_gsm_responsable = Column(Integer(10))
#     adresse_responsable = Column(Text())
#     email_responsable = Column(Text())

