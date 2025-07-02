# Awesome GitHub Copilot Example

This repository serves as a practical companion to the main [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot) repository and its accompanying [blog post](https://aka.ms/awesome-copilot/blog). Use this repo to follow along with examples and hands-on practice as you learn about GitHub Copilot customizations.

## Getting Started 🏎️

The easiest way is to run this in a devcontainer or a GitHub Codespace. It takes a bit to startup, but once it does, you'll be all set.

Of course you can still run everything locally, but you'll want to have node, next.js and postgresql all installed.

## What You'll Learn 📚

This repository covers three key areas of GitHub Copilot customization:

### 🎯 Custom Instructions

Learn how to create personalized instructions that guide Copilot's behavior across your entire development workflow. Custom instructions let you:

- Set coding style preferences and conventions
- Define project-specific context and requirements
- Establish consistent patterns for code generation
- Customize how Copilot interacts with your specific programming languages and frameworks

### 💬 Reusable Prompts

Discover how to create and manage a library of reusable prompts for common tasks that you may ask the AI to do. This includes:

- Checking on any pull requests you may have open
- Define prompts for code reviews
- Define instructions for generating commit messaes

### 🤖 Custom Chat Modes

Explore how to build specialized chat experiences tailored to your specific workflow needs. You'll learn to:

- Create a chat mode for planning, where the AI has read-only access to the codebase and can only generate implementation plans.
- Define a research chat mode where the AI can reach out to external resources.
- Create a DBA chat mode where the AI knows in-depth details about your database and DB-related concepts.

## A bit of a pre-req 🛠️

### Using the GitHub MCP Server

To fully utilize the examples in this repository, you'll need to connect to the **GitHub MCP (Model Context Protocol) Server**. This remote server provides enhanced context about GitHub repositories, issues, pull requests, and collaboration workflows.

The GitHub MCP Server runs as a remote service and provides rich context about:

- Repository structure and codebase information
- Issue tracking and project management data
- Pull request workflows and collaboration patterns
- GitHub-specific development practices and conventions

For detailed setup instructions and configuration options, visit the official [GitHub MCP Server repository](https://github.com/github/github-mcp-server).

## Learn More 📖

For comprehensive information about GitHub Copilot customization features, check out the official [VS Code Copilot Customization Documentation](https://code.visualstudio.com/docs/copilot/copilot-customization). This resource provides in-depth guidance on:

- Setting up custom instructions
- Creating and managing reusable prompts
- Configuring custom chat modes
- Advanced customization techniques

## Resources 🔗

- 🌟 [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot)
- 📝 [Blog Post](https://aka.ms/awesome-copilot/blog)
- 📚 [VS Code Copilot Documentation](https://code.visualstudio.com/docs/copilot/copilot-customization)
- 🔧 [GitHub MCP Server](https://github.com/github/github-mcp-server)
