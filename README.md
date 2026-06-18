# WebSocket Server Dashboard

A FastAPI WebSocket server for synchronizing player positions, with a React dashboard for monitoring server statistics.

## Install

```powershell
Copy-Item .env.example .env
docker compose up -d

cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt

cd ..\frontend
npm install
```

Before starting the project, make sure the PostgreSQL database variable in `.env` is named `POSTGRES_DB`.

## Usage

Start the backend:

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Start the frontend in a separate terminal:

```powershell
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser. The WebSocket endpoint is available at `ws://localhost:8000/ws`.

## Contributing

Pull requests are welcome.

## License

No license has been specified yet.
