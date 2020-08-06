from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World!"


@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<word>')
def sayIt(word):
    return "Hello, " + word + "!"

@app.route('/repeat/<int:num>/<word>')
def repeatIt(num, word):
    return word*num

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try again.", 404 


if __name__ == "__main__":
    app.run(debug=True)
