# Use the official Node.js 20 image as base
FROM node:20-bullseye

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# The node user already exists in the base image, so we don't need to create it
# Just ensure the user has the correct shell
RUN usermod --shell /bin/bash node

# Set the working directory
WORKDIR /workspace

# Change ownership of the workspace to the node user
RUN chown -R node:node /workspace

# Switch to the node user
USER node

# Copy package files and install dependencies
COPY --chown=node:node awesome-copilot/package*.json ./awesome-copilot/
WORKDIR /workspace/awesome-copilot

# Install Node.js dependencies
RUN npm install

# Set environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
ENV PATH="/workspace/awesome-copilot/node_modules/.bin:$PATH"

# Go back to workspace root
WORKDIR /workspace

# Expose the ports
EXPOSE 3000 5432

# Default command
CMD ["sleep", "infinity"]
