# Development Container Setup

This repository includes a complete development container configuration that provides a consistent development environment with all necessary dependencies.

## What's Included

- **Node.js 20**: Latest LTS version for running the Next.js application
- **PostgreSQL 15**: Database server for the todo application
- **VS Code Extensions**: Pre-configured extensions for optimal development experience
  - TypeScript support
  - Tailwind CSS IntelliSense
  - Prisma support
  - Prettier formatting
  - ESLint
  - GitHub Copilot

## Quick Start

1. **Prerequisites**:
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - Install [VS Code](https://code.visualstudio.com/)
   - Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

2. **Launch the Development Environment**:
   - Open this repository in VS Code
   - When prompted, click "Reopen in Container" (or use Command Palette: "Dev Containers: Reopen in Container")
   - Wait for the container to build and start (first time may take a few minutes)

3. **Automatic Setup**:
   The devcontainer will automatically:
   - Install Node.js dependencies
   - Start PostgreSQL database
   - Copy environment variables from `.env.example` to `.env`
   - Generate Prisma client
   - Push database schema
   - Start the Next.js development server on port 3000

## Services

- **Next.js App**: http://localhost:3000
- **PostgreSQL Database**: localhost:5432
  - Username: `postgres`
  - Password: `postgres`
  - Database: `todoapp`

## Manual Commands

If you need to run commands manually:

```bash
# Navigate to the app directory
cd awesome-copilot

# Install dependencies
npm install

# Database operations
npx prisma generate
npx prisma db push
npx prisma studio  # Database GUI

# Development
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run linting
```

## Environment Variables

The setup automatically copies `.env.example` to `.env`. Modify the `.env` file if you need to change any configuration:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/todoapp"
NEXT_TELEMETRY_DISABLED=1
NODE_ENV=development
```

## Troubleshooting

- **Container fails to start**: Ensure Docker Desktop is running and you have sufficient resources allocated
- **Database connection issues**: Check that PostgreSQL service is running with `docker ps`
- **Port conflicts**: Ensure ports 3000 and 5432 are not already in use on your host machine
- **Permission issues**: The container runs as the `node` user for security

## Development Workflow

1. The development server starts automatically and watches for file changes
2. Database schema changes can be applied with `npx prisma db push`
3. Use `npx prisma studio` to view and edit database data through a web interface
4. All VS Code extensions are pre-configured for optimal TypeScript and React development
