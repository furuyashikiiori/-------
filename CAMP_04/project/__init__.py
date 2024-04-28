from flask import Flask
app =  Flask(__name__)
import project.main

from project import db
db.create_library_table()