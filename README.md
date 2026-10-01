# sunnykumar.work

Portfolio site for Sunny Kumar. Plain HTML/CSS, no build step. Hosted on GitHub Pages.

## Structure

```
index.html                    Home: hero, work, about, contact
work/cloud-platform.html      Case study 01
work/identity-access.html     Case study 02
work/ai-campaign-manager.html Case study 03
css/style.css                 All styles (colours in :root at the top)
js/site.js                    Scroll reveal, TOC highlight, image placeholders
images/                       Add your images here (see list below)
CNAME                         Custom domain for GitHub Pages
404.html                      Not-found page
```

## Adding images

Every image slot shows a dashed placeholder with its file name until you add the file.
Export from Notion/Figma and save with exactly these names:

**Card covers (optional, 16:9 or wider)**
- images/covers/cloud-platform.jpg
- images/covers/identity-access.jpg
- images/covers/ai-campaign-manager.jpg

**Cloud Platform** — images/cloud/
- field-level-test.png
- cspm-evaluation.png
- user-lifecycle.jpg
- before.png, after.png
- assurance-concepts.jpg
- assurance-funnel.jpg
- kms-key-types.png
- journey-phase-1.jpg
- cost-analyser-ia.jpg
- cspm-findings-before.png, cspm-findings-after.jpg

**Identity & Access** — images/iam/
- access-analyzer.jpg
- user-to-role-flow.gif
- trust-vs-delegation.gif
- conditions-flow.gif
- gemini-cli-build.png

**AI Campaign Manager** — images/ai/
- model-convergence.svg
- agentic-maturity.svg
- design-process.svg
- leadership-map.svg
- five-layer-architecture.svg

Tip: keep images under ~500 KB each (export JPG at 80% or use squoosh.app). For screen
recordings, convert to GIF or swap the `<img>` for a `<video autoplay muted loop playsinline>`.
Redact names, emails and client data before publishing.

## Deploy to GitHub Pages

1. Create a public repo on GitHub, e.g. `sunnykumar.work`.
2. Upload all files in this folder to the repo root (Add file → Upload files), then commit.
3. Repo → Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`. Save.
4. Same page → Custom domain: `www.sunnykumar.work` → Save. (The CNAME file already sets this.)
5. At your domain registrar, add these DNS records:

| Type  | Host / Name | Value                    |
|-------|-------------|--------------------------|
| CNAME | www         | YOUR-GITHUB-USERNAME.github.io |
| A     | @           | 185.199.108.153          |
| A     | @           | 185.199.109.153          |
| A     | @           | 185.199.110.153          |
| A     | @           | 185.199.111.153          |

6. Wait for DNS to propagate (minutes to a few hours), then tick "Enforce HTTPS" in Settings → Pages.

The four A records make `sunnykumar.work` (without www) redirect to `www.sunnykumar.work`.
