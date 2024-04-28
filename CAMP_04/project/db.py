import sqlite3

DATABASE = 'database.db'

def create_library_table():
    con = sqlite3.connect(DATABASE)
    con.execute("CREATE TABLE IF NOT EXISTS librarys (photo, title, selection)")
    con.close()
