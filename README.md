# Daily Hollaren

A static music journal for Frances “Francie” Hollaren.

## Add an article

1. Copy `ARTICLE_TEMPLATE.md` into the `_posts` folder (create it if this is the first article).
2. Rename it using `YYYY-MM-DD-short-title.md`, for example `2026-08-18-last-night-at-the-paragon.md`.
3. Replace the metadata at the top and the sample text with the article. Keep the three dashes above and below the metadata.
4. Commit and push. GitHub Pages publishes it at `/articles/short-title/`.

The title, dek, byline, date, reading time, issue number, lead image, and caption are controlled by the metadata. The rest is ordinary Markdown. Use `##` for section headings, `>` for a pull quote, and `---` for an ornamental scene break.

To link an article from the front page, use its published path in `index.html`, for example:

```html
<a href="/articles/last-night-at-the-paragon/">Read the story</a>
```

## Preview locally

The local preview uses the same Jekyll integration as GitHub Pages, so it renders Markdown articles and their final URLs correctly.

### First-time setup on Ubuntu

Install Ruby and Bundler:

```sh
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
gem install bundler
```

If `gem install bundler` reports a permissions error, configure a user-owned gem directory as described in the [Jekyll Ubuntu installation guide](https://jekyllrb.com/docs/installation/ubuntu/), then run it again.

### Start the site

From the repository folder, run:

```sh
./bin/serve
```

The first run downloads the GitHub Pages dependencies. Then open [http://127.0.0.1:4000](http://127.0.0.1:4000). Changes to Markdown, HTML, and CSS reload automatically. Stop the server with `Ctrl+C`.

To use a different port:

```sh
DAILY_HOLLAREN_PORT=4100 ./bin/serve
```

## Publish with GitHub Pages

1. Push these files to the repository's publishing branch (typically `main`).
2. On GitHub, open **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the publishing branch and the **/(root)** folder, then click **Save**.
5. After the deployment completes, use **Visit site** in the Pages settings to open it.

The publishing folder contains `index.html` at its top level, which GitHub Pages requires. GitHub Pages runs Jekyll automatically so Markdown articles become HTML. No local build step, server, or dependencies are required.

## Custom domain

This repository is configured for `dailyhollaren.com` with the root-level `CNAME` file.

Before setting DNS records, open **Settings** → **Pages** on GitHub, enter `dailyhollaren.com` under **Custom domain**, and save. Then, at your DNS provider, create these four `A` records for `@`:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Also add a `CNAME` record for `www` pointing to your GitHub Pages default domain (for example, `your-username.github.io`—not the repository name). Once GitHub makes the option available, enable **Enforce HTTPS** in Pages settings.
