# hello-next-docker

Minimal Next.js app packaged for Docker + docker compose.

## Local run

```bash
docker compose up -d --build
# open http://localhost/
```

## Files

- `Dockerfile` builds app
- `docker-compose.yml` exposes 80->3000
- `pages/index.js` simple page
