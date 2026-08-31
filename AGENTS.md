# AGENTS.md

Context and operational guidelines for AI agents working in `porto` (`cakson.my.id`).

## Tech Stack & Architecture

- **Framework**: Astro 5 (`astro` ^7.2 / static output) + `@astrojs/mdx` + `@astrojs/sitemap`
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` + `@tailwindcss/typography` + `daisyui` v5 (`src/styles/global.css`)
- **Language**: TypeScript (strict mode, path alias `@*` -> `src/*`)
- **Node**: `>=22.12.0` (see `.node-version`)
- **Content Layer**: Content collections configured via `src/content.config.ts` using glob loaders (`src/content/projects` and `src/content/legal`)

## Commands

- **Dev Server**: `npm start` (or `npx astro dev`)
- **Typecheck**: `npx astro check`
- **Build**: `npm run build` (runs `astro check && astro build`)
- **Preview**: `npm run preview`
- **Lint**: `npm run lint` (`eslint .`)
- **Lint Fix**: `npm run lint:fix`
- **Tests**: `npm test` (runs `node --test`, tests located in `test/`)
- **Single Test**: `node --test test/pager.test.ts`

## Verification Sequence

Before submitting changes, run:
```bash
npm run lint && npm test && npm run build
```

## Key Conventions & Quirks

- **Formatting / Linting**: ESLint enforces no semicolons (`semi: ["error", "never"]`) and double quotes (`quotes: ["error", "double"]`).
- **Path Aliases**: `@*` resolves to `src/*` (e.g. `@components/Header.astro`, `@lib/utils`).
- **Content Collections**: Define collections in `src/content.config.ts` using Astro 5 `defineCollection` and `glob` loader. Project entries live in `src/content/projects/<slug>/index.md` with schema `{ title, summary, date, tags, draft?, demoUrl?, repoUrl? }`.
- **Static Assets & Glob Imports**: Certificate data in `src/data.ts` loads images via `import.meta.glob` from `./assets/certificates/*`.
- **Environment Variables**:
  - `PUBLIC_APPS_SCRIPT_URL`: Google Apps Script endpoint for the contact form.
  - `PUBLIC_CONTACT_SECRET`: Shared secret used for client-side HMAC signature in `ContactForm.astro`.
- **No unrequested doc/test bloat**: Keep diffs minimal and surgical. Run `npm test` and `npm run build` to ensure static generation passes.

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
Before starting, ask the user when antislop applies: during the work, or after it is done.
<!-- antislop:end -->

