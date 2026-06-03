# Claire Goce Audio Portfolio — GitHub Pages Deployment Guide

This project is already configured for GitHub Pages static deployment.

## What is included

- Next.js static export setup in `next.config.mjs`
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Profile image in `public/images/`
- Audio samples in `public/media/audio/`
- Video samples in `public/media/video/`
- Portfolio entries for Remix, Medley, Mash Up, Dubbing, Dialogue, Cut Up, Beat Matching, Foley, Masterpiece, and Audio Mix

## How to deploy

1. Extract this zip.
2. Push the contents of the `claire-goce-audio-portfolio` folder to your GitHub repository.
3. In GitHub, open your repository.
4. Go to `Settings` → `Pages`.
5. Under `Build and deployment`, set `Source` to `GitHub Actions`.
6. Go to the `Actions` tab.
7. Wait for the workflow to finish with a green check.

Your website link will be:

```txt
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Updating the site later

After changing files, run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and republish the site.
