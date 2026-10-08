# Scuderia GRT — Render-ready

## Render settings
- Service type: Web Service
- Runtime: Python
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app --bind 0.0.0.0:$PORT`
- Root Directory: leave blank

The app uses port 8055 locally when run directly, but uses Render's `$PORT` in production.

## Required structure
- app.py
- requirements.txt
- render.yaml
- templates/index.html
- static/style.css
- static/script.js
- static/grt-logo.jpg
