# Contributing to NopCommerce

We love your input! We want to make contributing to NopCommerce as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `master`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Pull Request Process

1. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. Make your changes and commit them using conventional commits:

   ```bash
   git add .
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve issue with..."
   ```

3. Push to your fork and submit a pull request:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Wait for the CI checks to pass and address any review comments

## Any Contributions You Make Will Be Under the Project's License

In short, when you submit code changes, your submissions are understood to be under the same [license](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report Bugs Using GitHub's Issue Tracker

We use GitHub issues to track public bugs. Report a bug by opening a new issue.

## Write Bug Reports With Detail, Background, and Sample Code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Use a Consistent Coding Style

- Use TypeScript for all new code
- 2 spaces for indentation
- Run `npm run lint` to check your code style
- Run `npm run format` to automatically format your code

## License

By contributing, you agree that your contributions will be licensed under its project License.
