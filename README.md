# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid input, specifically in this case, invalid user IDs.

## The Bug

The `bug.js` file contains an Express.js route handler that fetches user data based on a user ID passed as a route parameter.  It's missing crucial error handling.  If a non-existent or invalid user ID is provided, the application will likely crash or return an unexpected error message to the client.

## The Solution

The `bugSolution.js` file shows how to fix this.  It adds error handling using `try...catch` blocks to gracefully manage situations where the user ID is invalid.  More robust error handling mechanisms (database checks, input validation) can be further implemented for production-ready code.

## How to Run

1. Clone this repository.
2. Navigate to the cloned directory using your terminal.
3. Install the required packages: `npm install express`
4. Run the `bug.js` (demonstrating the bug) and `bugSolution.js` (showing the fix) files using Node.js: `node bug.js` and `node bugSolution.js` respectively.
5. Test with valid and invalid user IDs to observe the difference in behavior.