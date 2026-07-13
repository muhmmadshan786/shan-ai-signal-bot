from flask import Flask, jsonify
import requests

app = Flask(__name__)

API_KEY = "a8403e95f5664ae59b63cb456ac04608"

@app.route("/")
def home():
    url = f"https://api.twelvedata.com/price?symbol=GBP/USD&apikey={API_KEY}"
    data = requests.get(url).json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
