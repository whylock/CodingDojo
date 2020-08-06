from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def chessboard():
    return render_template('index.html', chessX = 8, chessY = 8, color1 = 'red', color2 = 'black')


@app.route('/<int:x>')
def chessboardX(x):
    return render_template('index.html', chessX = x, chessY = 4, color1 = 'red', color2 = 'black')

@app.route('/<int:x>/<int:y>')
def chessboardXY(x,y):
    return render_template('index.html', chessX = x, chessY = y, color1 = 'red', color2 = 'black')

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def chessboardXYC(x,y,color1,color2):
    return render_template('index.html', chessX = x, chessY = y, color1 = str(color1), color2 = str(color2))

if __name__ == "__main__":
    app.run(debug=True)