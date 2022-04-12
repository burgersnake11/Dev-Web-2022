from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
DATABASE_URL = "mysql+mysqlconnector://root:louis123456*@127.0.0.1:3306/test"
engine = create_engine(url=DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = SessionLocal()
