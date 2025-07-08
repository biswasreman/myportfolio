# Reman Biswas Cybersecurity Portfolio

## Overview

This is a modern cybersecurity portfolio website for Reman Biswas, built with a dark hacker theme. The application is a full-stack web application featuring a React frontend with a terminal-inspired design and an Express.js backend. The project uses TypeScript throughout and implements a sophisticated UI system with shadcn/ui components styled for a cybersecurity aesthetic.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom hacker/terminal theme
- **UI Components**: shadcn/ui component library with extensive customization
- **State Management**: React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Bundling**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for fast compilation and bundling

### Database & ORM
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via environment variable DATABASE_URL)
- **Migrations**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless driver for cloud connectivity

## Key Components

### Design System
- **Theme**: Dark cyberpunk/hacker aesthetic with matrix-style animations
- **Typography**: Monospace fonts (Fira Code, JetBrains Mono) for terminal feel
- **Color Palette**: Terminal green (#00ff00), matrix green, neon red accents on black background
- **Animations**: Matrix rain effect, typewriter animations, terminal cursor effects

### UI Components
- Comprehensive set of accessible components from Radix UI
- Custom styling for hacker theme including buttons, dialogs, forms, navigation
- Responsive design with mobile-first approach
- Dark mode optimized with CSS custom properties

### Content Sections
- **Hero**: Animated terminal-style introduction
- **About**: Professional background and expertise
- **Skills**: OS experience, tools, certifications
- **Services**: Cybersecurity offerings
- **Contact**: Social links and professional contact

## Data Flow

### Client-Side
1. React application loads with matrix animation background
2. Typewriter effects render section headers as Linux commands
3. React Query manages any API state (currently minimal backend interaction)
4. Smooth scrolling navigation between portfolio sections

### Server-Side
1. Express server handles static file serving in production
2. API routes prefixed with `/api` (currently minimal implementation)
3. Vite dev server integration for hot reloading in development
4. Error handling middleware for API routes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Cloud PostgreSQL connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing
- **class-variance-authority**: Component variant management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives (dialogs, dropdowns, etc.)
- **tailwindcss**: Utility-first CSS framework
- **clsx & tailwind-merge**: Conditional class name utilities
- **lucide-react**: Icon library

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production
- **vite**: Frontend tooling and dev server

## Deployment Strategy

### Development
- Run `npm run dev` to start both frontend (Vite) and backend (tsx) in development mode
- Vite provides HMR and React Fast Refresh
- Express server serves API routes while Vite handles frontend assets

### Production Build
1. `npm run build` compiles both frontend and backend
2. Frontend builds to `dist/public` via Vite
3. Backend compiles to `dist/index.js` via esbuild
4. `npm start` runs the production Express server
5. Express serves static frontend files and API routes

### Database
- Requires PostgreSQL database URL in environment
- Run `npm run db:push` to sync schema changes
- Drizzle handles migrations and type generation

## Changelog

- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.