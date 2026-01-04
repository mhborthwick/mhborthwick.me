# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Astro, a modern static site generator. The project uses TypeScript with strict configuration and Biome for linting/formatting.

## Package Manager

**CRITICAL**: This project uses `pnpm` as the package manager (version 10.27.0+). Always use `pnpm` commands, never `npm` or `yarn`.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (outputs to `dist/`)
- `pnpm preview` - Preview production build locally
- `pnpm format` - Format code with Biome
- `pnpm lint` - Lint and auto-fix with Biome

## Code Style & Formatting

### Biome Configuration
- **Indentation**: Tabs (not spaces)
- **Quote Style**: Double quotes for JavaScript/TypeScript
- **Import Organization**: Automatic via Biome's assist feature
- **Astro Files**: Special linting rules applied - `useConst`, `useImportType`, `noUnusedVariables`, and `noUnusedImports` are disabled for `.astro` files

### Formatter Priority
- JavaScript/TypeScript: Biome
- Astro files: Astro VSCode extension (official formatter)
- Markdown: Prettier

## Architecture

### Directory Structure
- `src/pages/` - File-based routing (Astro convention)
- `public/` - Static assets served as-is
- `dist/` - Build output (gitignored)
- `.astro/` - Generated types (gitignored)

### TypeScript Configuration
- Extends `astro/tsconfigs/strict`
- Includes all files in the project
- Excludes `dist/` directory

### Astro Configuration
Currently using default Astro configuration (`astro.config.mjs` is minimal). Any integrations or custom settings should be added there following Astro's defineConfig pattern.

## Important Notes

- All `.local.*` files are gitignored (useful for personal notes/todos)
- Environment variables should go in `.env` or `.env.production` (both gitignored)
- The project uses strict TypeScript settings via Astro's strict tsconfig
