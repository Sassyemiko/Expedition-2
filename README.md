# Oceanic Explorer

Oceanic Explorer is a multi-package monorepo for immersive expedition experiences, including a polished landing experience for Expedition 2, supporting API services, database tooling, and generated client code.

## Overview

This project combines:

- A React/Vite front end for the Expedition 2 experience
- An Express-based API server
- A Drizzle/PostgreSQL data layer
- Generated API clients and schema helpers for frontend integration
- Supporting artifacts for storytelling and mockup exploration

## Project Structure

- artifacts/expedition-2 — main Expedition 2 web app
- artifacts/expedition-2-story — alternate story-focused experience
- artifacts/mockup-sandbox — UI prototype sandbox
- artifacts/api-server — backend API service
- db — Drizzle schema and database tooling
- lib/api-client-react — generated React API client
- lib/api-spec — OpenAPI contract and codegen config
- lib/api-zod — generated Zod validation helpers

## Prerequisites

- Node.js 20+ (the workspace is configured for modern TypeScript tooling)
- pnpm
- PostgreSQL (for database-backed workflows)

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the frontend app:

   ```bash
   pnpm --filter @workspace/expedition-2 run dev
   ```

3. Start the API server:

   ```bash
   pnpm --filter @workspace/api-server run dev
   ```

4. Set the required environment variables, including:

   ```bash
   DATABASE_URL=postgres://user:password@localhost:5432/oceanic_explorer
   ```

## Useful Commands

- Run type checks:

  ```bash
  pnpm run typecheck
  ```

- Build the workspace:

  ```bash
  pnpm run build
  ```

- Regenerate API clients and schemas:

  ```bash
  pnpm --filter @workspace/api-spec run codegen
  ```

- Push database schema changes (development use):

  ```bash
  pnpm --filter @workspace/db run push
  ```

## Stack

- pnpm workspaces
- TypeScript
- React + Vite
- Tailwind CSS
- Express
- Drizzle ORM + PostgreSQL
- Zod validation
- OpenAPI-driven code generation

## Notes

- The frontend and API are organized as separate workspace packages to keep the experience modular.
- API schemas and clients are generated from the OpenAPI spec under lib/api-spec.
- Database schema changes should be reviewed carefully before pushing to a shared environment.
