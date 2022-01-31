from flask import Flask, jsonify, request
from itsdangerous import json

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if (request.method == 'POST'):
        data = request.get_json()
        email = data['email']
        username = data['username']
        password = data['password']
        linkedInLink = data['leadListLink']
        
        return jsonify({"The Email is:": email, 'The Password is: ': password, 'The Username is: ': username, "The Lead Link is: ": linkedInLink})
        
    else:
        return jsonify({"about":"hello world"})

if __name__ == '__main__':
    app.run(debug =True)  