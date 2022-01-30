from flask import Flask
from flask import request

app = (__name__)

@app.route('/', methods = 'POST', 'GET')
def get_leads():

    