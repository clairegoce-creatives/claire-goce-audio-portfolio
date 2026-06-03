# Claire Goce Audio Portfolio

A publish-ready Next.js portfolio site configured for GitHub Pages static deployment.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

This zip already includes:

- `output: "export"` in `next.config.mjs`
- GitHub Pages workflow at `.github/workflows/deploy.yml`
- automatic repository base path handling
- local audio/video files inside `public/media/`
- profile photo inside `public/images/`

Steps:

1. Upload/push this project to a GitHub repository.
2. Go to `Settings` → `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Open the `Actions` tab and wait for the deployment workflow to finish.
5. Open `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.

See `GITHUB_PAGES_DEPLOYMENT_GUIDE.md` for more details.
