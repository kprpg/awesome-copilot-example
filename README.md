# Awesome GitHub Copilot Example

This repository serves as a practical companion to the main [Awesome GitHub Copilot Customizations](https://github.com/github/awesome-copilot) repository and its accompanying [blog post](https://aka.ms/awesome-copilot/blog). Use this repo to follow along with examples and hands-on practice as you learn about GitHub Copilot customizations. 

## What You'll Learn 📚

This repository covers three key areas of GitHub Copilot customization:

### 🎯 Custom Instructions
Learn how to create personalized instructions that guide Copilot's behavior across your entire development workflow. Custom instructions let you:
- Set coding style preferences and conventions
- Define project-specific context and requirements  
- Establish consistent patterns for code generation
- Customize how Copilot interacts with your specific programming languages and frameworks

### 💬 Reusable Prompts  
Discover how to create and manage a library of reusable prompts for common development tasks. This includes:
- Building template prompts for code review, documentation, and testing
- Creating context-aware prompts that adapt to different codebases
- Organizing and sharing prompts across your development team
- Streamlining repetitive coding tasks with pre-defined prompt patterns

### 🤖 Custom Chat Modes
Explore how to build specialized chat experiences tailored to your specific workflow needs. You'll learn to:
- Create domain-specific chat modes for different types of development (frontend, backend, DevOps, etc.)
- Configure chat contexts that understand your project architecture and dependencies
- Build interactive coding assistants for specific frameworks or tools
- Design conversational flows that guide through complex development processes  

## Getting Started 🛠️

### Using the GitHub MCP Server

To fully utilize the examples in this repository, you'll need to connect to the **GitHub MCP (Model Context Protocol) Server**. This remote server provides enhanced context about GitHub repositories, issues, pull requests, and collaboration workflows.

#### Setting up GitHub MCP Server Connection

1. **Authentication:** Create a GitHub personal access token with appropriate repository permissions
2. **Configure your MCP client** to connect to the remote GitHub MCP server endpoint
3. **Set your token** as an environment variable or in your MCP client configuration:
   ```bash
   export GITHUB_TOKEN=your_token_here
   ```

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

Happy coding with GitHub Copilot! 🎊💻
