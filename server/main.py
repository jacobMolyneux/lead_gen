from flask import Flask, jsonify, request
from itsdangerous import json
from scrape import generate_leads

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if (request.method == 'POST'):
        data = request.get_json()
        username = data['username']
        password = data['password']
        linkedInLink = data['leadListLink']
        response = generate_leads(username = username, password = password, linkedInLink=linkedInLink)
        return jsonify(response)
        
    else:
        return jsonify({"about":"hello world"})

if __name__ == '__main__':
    app.run(debug =True)  