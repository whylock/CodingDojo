from flask import Flask, render_template
app = Flask(__name__)


@app.route ('/play')
def boxes():
    return render_template('index.html', nTimes = 3, boxColor = 'lightblue')

@app.route('/play/<int:times>')
def timesBoxes(times):
    return render_template('index.html', nTimes = times, boxColor = 'lightblue')

@app.route('/play/<int:times>/<color>')
def colorBoxes(times,color):
    return render_template('index.html', nTimes = times, boxColor = str(color))


if __name__ == "__main__":
    app.run(debug=True)