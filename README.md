
# Simple Calculator

## High-Level Description
This is a simple calculator application built using Webpack and JavaScript. The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It has a user-friendly interface with a display area for operations and results, styled using CSS.

### Application Overview
- **HTML**: Provides the structure of the calculator.
- **CSS**: Styles the calculator, including colors for buttons and displays.
- **JavaScript**: Implements the calculator logic, handling user input and performing calculations.

## Prerequisites
- Node.js (version 14 or later)
- npm (Node package manager)
- Webpack (for building the project)

## How to Build and Serve the Application

### Directly on Your Local Machine

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Serve the project:**
   ```bash
   npm run serve
   ```

5. **Open the app in your browser:**
   Go to `http://localhost:8080`

### Using Docker

1. **Build the Docker image:**
   ```bash
   docker build -t simple-calculator .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 8080:8080 simple-calculator
   ```

3. **Open the app in your browser:**
   Go to `http://localhost:8080`
