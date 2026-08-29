# Exercise 9 – GitHub User Search

This exercise is a React.js application that allows users to search for GitHub users and display information retrieved from the GitHub API.

## 🎯 Objective

The goal of this exercise is to practice:

- Fetching data from an external API
- Using `async/await`
- Managing loading and error states
- Handling API errors
- Updating React state with fetched data
- Using conditional rendering
- Working with user input

## 🔎 GitHub User Search

Users can enter a GitHub username and click the **Search** button.

The application sends a request to the GitHub API:

```text
https://api.github.com/users/{username}