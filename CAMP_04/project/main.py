from project import app
from flask import render_template, request, redirect, url_for
import sqlite3
DATABASE = 'database.db'
connection = sqlite3.connect('your_database.db')
cursor = connection.cursor()


# @app.route('/')
# def index():
#     con = sqlite3.connect(DATABASE)
#     db_librarys = con.execute('SELECT * FROM librarys').fetchall()
#     con.close()

#     librarys = []
#     for row in db_librarys:
#         librarys.append({'photo':row[0], 'title':row[1], 'selection':row[2]})


#     return render_template(
#         'main.html',
#         librarys=librarys
#     )

@app.route('/')
def index():
    con = sqlite3.connect(DATABASE)
    db_librarys = con.execute('SELECT * FROM librarys').fetchall()
    con.close()

    librarys = []
    for row in db_librarys:
        # 画像パスから'/project'を削除して新しい辞書を作成
        photo_path = row[0].replace('/project', '')
        librarys.append({'photo': photo_path, 'title': row[1], 'selection': row[2]})

    return render_template('main.html', librarys=librarys)


@app.route('/regist')
def registration():
    return render_template(
        'Registration.html'
    )

@app.route('/prof')
def prof():
    return render_template(
        'profile.html'
    )

@app.route('/edit')
def edit():
    return render_template(
        'Edit.html'
    )

# @app.route('/register', methods=['POST'])
# def register():
#     photo = request.form['image']
#     title = request.form['title']
#     selection = request.form['selection']

#     con = sqlite3.connect(DATABASE)
#     con.execute('INSERT INTO library VALUES(?, ?, ?)',
#                 [photo, title, selection])
#     con.commit()
#     con.close()
#     return redirect(url_for('index'))

@app.route('/register', methods=['POST'])
def register():
    photo = request.files['image']
    title = request.form['title']
    selection = request.form['selection']

    # ファイルを保存する
    photo_path = 'project/static/image/' + photo.filename
    photo.save(photo_path)

    # データベースに挿入する
    con = sqlite3.connect(DATABASE)
    con.execute('INSERT INTO librarys (photo, title, selection) VALUES (?, ?, ?)',
                [photo_path, title, selection])
    con.commit()
    con.close()
    
    # リダイレクトする
    return redirect(url_for('index'))