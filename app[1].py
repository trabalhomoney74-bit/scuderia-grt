from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/health")
def health():
    return jsonify({"status": "ok", "site": "GRT Enterprise Portfolio", "port": 8055})


if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", "8055"))
    app.run(host="0.0.0.0", port=port, debug=False)
