# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Astro, a modern static site generator. The project uses the following stack:

- **Astro** - Static site generator with file-based routing
- **React** - UI components (server-rendered only, no client-side JS)
- **TypeScript** - Strict configuration enabled
- **Biome** - Primary linting and formatting tool (Prettier as fallback)
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Testing framework with coverage support
- **React Testing Library** - Testing for React components

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (outputs to `dist/`)
- `pnpm preview` - Preview production build locally
- `pnpm format` - Format code with Biome
- `pnpm lint` - Lint and auto-fix with Biome
- `pnpm test` - Run tests with Vitest
- `pnpm coverage` - Run tests and calculate coverage

## Code Quality

### Pre-commit Checklist

Before pushing code changes, always:

1. Run `pnpm lint && pnpm format` to ensure code style compliance
2. Run `pnpm test` to verify all tests pass
3. Check that no environment variables or secrets are committed

### Code Style

- Refer to `biome.json` for code styling configurations
- Biome is the primary formatter; Prettier is available as a fallback
- Follow TypeScript strict mode guidelines

## Architecture

### Directory Structure

- `src/pages/` - File-based routing (Astro convention)
- `src/components/` - Reusable React components (`.tsx` files)
- `src/layouts/` - Page layouts (`.astro` files)
- `src/styles/` - Global styles and CSS files
- `public/` - Static assets served as-is
- `dist/` - Build output (gitignored)
- `.astro/` - Generated types (gitignored)

### React Components

This project uses React components within Astro:

- **Components**: `Nav.tsx`, `Footer.tsx` (in `src/components/`)
- **Server-Rendered Only**: All React components are server-rendered by default (no client-side JavaScript)
- **Styling**: Components use Tailwind utility classes directly in `className` attributes
- **Testing**: React components use React Testing Library (`@testing-library/react`)
- **Hydration**: To add client-side interactivity to a component, use Astro's `client:*` directives:
  - `client:load` - Hydrate immediately on page load
  - `client:idle` - Hydrate when browser is idle
  - `client:visible` - Hydrate when component enters viewport
  - `client:only="react"` - Only render on client (no SSR)

Example usage in Astro files:
```astro
---
import Nav from "../components/Nav.tsx";
---
<!-- Server-rendered only (no JS sent to client) -->
<Nav currentPath={Astro.url.pathname} />

<!-- With client-side hydration (if needed in future) -->
<Nav currentPath={Astro.url.pathname} client:load />
```

### Security Considerations

- Never commit environment variables or secrets
- Prefer implementing solutions using existing dependencies
- Ask before installing new dependencies to avoid unnecessary bloat

## Important Notes

- **Package Manager**: This project uses `pnpm` (version 10.27.0). Always use `pnpm` commands, never `npm` or `yarn`
- **Gitignore**: All `.local.*` files are gitignored
- **Environment Variables**: Should go in `.env` or `.env.production` (both gitignored)
