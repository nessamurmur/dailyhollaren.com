# Daily Hollaren

A static music journal for Frances “Francie” Hollaren.

## Publish with GitHub Pages

1. Push these files to the repository's publishing branch (typically `main`).
2. On GitHub, open **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the publishing branch and the **/(root)** folder, then click **Save**.
5. After the deployment completes, use **Visit site** in the Pages settings to open it.

The publishing folder contains `index.html` at its top level, which GitHub Pages requires. The `.nojekyll` file prevents Jekyll from transforming the static files.

No build step, server, or dependencies are required.

## Custom domain

This repository is configured for `dailyhollaren.com` with the root-level `CNAME` file.

Before setting DNS records, open **Settings** → **Pages** on GitHub, enter `dailyhollaren.com` under **Custom domain**, and save. Then, at your DNS provider, create these four `A` records for `@`:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Also add a `CNAME` record for `www` pointing to your GitHub Pages default domain (for example, `your-username.github.io`—not the repository name). Once GitHub makes the option available, enable **Enforce HTTPS** in Pages settings.
