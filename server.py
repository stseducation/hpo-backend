import flask

app = flask.Flask('app')

@app.route('/')
def index():
    return flask.render_template('login.html')

app.run(host='0.0.0.0', port=80)