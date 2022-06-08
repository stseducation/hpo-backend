import flask, json

app = flask.Flask('app')

@app.route('/')
def index():
    return flask.render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    open('request.json', 'w').write(json.dumps(dict(flask.request.form), indent=4))
    return True

x = '{"result":{"state":3,"tenantId":null},"targetUrl":null,"success":true,"error":null,"unAuthorizedRequest":false,"__abp":true}'

correct = '{ "result": { "state": 1, "tenantId": 13 }, "targetUrl": null, "success": true, "error": null, "unAuthorizedRequest": false, "__abp": true }'

@app.route('/api/services/app/Account/IsTenantAvailable', methods=['POST'])
def is_tenant_available():
    return correct

@app.route('/Account/TenantChangeModal', methods=['GET', 'POST'])
def tenant_change_modal():
    return flask.render_template('modal.html')

app.run(host='0.0.0.0', port=80)