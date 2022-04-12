from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text
from sqlalchemy import Table, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import mapper
from database import engine
from sqlalchemy.orm import sessionmaker

Base = declarative_base()
metadata = MetaData()




class Enfant(Base):
    __tablename__ = "enfant"
    id_enfant = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    nom_enfant = Column(String(45), nullable=False)
    prenom_enfant = Column(String(45), nullable=False)
    ddn_enfant = Column(String(45), nullable=False)
    numero_nationnal_enfant = Column(String(45), nullable=False)

    # def __repr__(self):
    #     return f"Enfant ('{self.id}','{self.nom}','{self.prenom}','{self.adresse}','{self.date_naissance}','{self.numero_national}')"

# Base.metadata.create_all(engine)
# SessionClass=sessionmaker(engine) #Créer une classe pour créer une session
# session=SessionClass()
#
# enfant1=Enfant(id=1, nom="Guiot", prenom="Louis", adresse="adresse1", date_naissance="date1", numero_national="numero1")
# session.add(enfant1)
# session.commit()

enfant_table = Table('Enfant', metadata,
                     Column("id_enfant", Integer, primary_key=True, nullable=False),
                     Column("nom_enfant", String(45), nullable=False),
                     Column("prenom_enfant", String(45), nullable=False),
                     Column("adresse", String(45), nullable=False),
                     Column("date_naissance", String(45), nullable=False),
                     Column("numero_national", String(45), nullable=False),
                     )
# class Responsable(Base):
#     __tablename__ = "Responsable"
#     id = Column(Integer, primary_key=True, index=True)
#     responsable = Column(String(10), unique=True)
#     nom_reponsable = Column(String(20), unique=True)
#     prenom_responsable = Column(String(20), unique=True)
#     tel_fix_responsable = Column(Integer(9))
#     tel_gsm_responsable = Column(Integer(10))
#     adresse_responsable = Column(Text())
#     email_responsable = Column(Text())
