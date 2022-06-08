import flask

app = flask.Flask('app')

@app.route('/')
def index():
    return 'Hello, world!'

app.run(host='0.0.0.0', port=80)