from flask import Flask, jsonify, request
from itsdangerous import json
from scrape import generate_leads
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
        return jsonify({"Error":"Problem Scraping, Please check your information is correct and try again."})

if __name__ == '__main__':
    app.run(debug =True)  