# hello-next-python

Next.js + FastAPI (Python) в Docker Compose.

- `web` (Next.js) на порту 3000, проброшен наружу на 80
- `api` (FastAPI) на 8000, доступ из Next.js через `/py/*` (см. `next.config.js`)

## Локально (если нужно)
```bash
docker compose up -d --build
```

Открой `http://localhost` и нажми кнопку — появится ответ Python.
