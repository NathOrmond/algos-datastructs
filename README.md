# Algorithms and Data Structures 

> These are just my personal notes for studying DS&A type questions. Feel free to use them as you want to if you want to for practising questions or seeing solutions.  

- Note I originally began writing this in typescript but seriously who cares. If you want to practice stuff in typescript using this go ahead, but also feel free to use javascript. This isn't a production app, it's for learning DS&A and documenting interesting features of solutions! 

## Installation

```bash
# Clone the repository
git clone git@github.com:NathOrmond/algos-datastructs.git

# Install dependencies
npm install
```

### Dependencies
- Node.js (v18.17.0 or higher recommended)
- TypeScript
- Mocha (testing framework)
- Chai (assertions)
- ts-node (TypeScript execution)
- tsconfig-paths (module resolution)

## How to Use 

> The project contains directories for some of the most common data structures and algorithms. Within these folders there are various example implementations with explanations of how they work in README files contained in the folders. 

> For an overview of the layout of code visit the src/test-example directory

### Running Tests
There are several ways to run tests:

```bash
# Run all tests
npm test

# Run a specific test file
npm run test:single src/path/to/your/test.spec.ts

# Run common algorithm tests
npm run test:bfs    # Run Breadth-First Search tests
```

### Watch Mode
During development, you can use watch mode to automatically run tests when files change:

```bash
# Watch all tests
npm run test:watch

# Watch a specific test file
npm run test:watch src/path/to/your/test.spec.ts
```

### Performance Testing
```bash
npm run performance  # TODO: Implementation pending
```

### Learning DS&A 
- Rule 1: Grind grind grind 
- Rules 2: Man was not made for computer science, but productivity governs this world
- Rule 3: Grind Grind Grind

## Project Structure
- Take a look at the test problem to see how things are strucutred. The general gist is that there is a PROBLEM.md and a SOLUTION.md file that help with explanation. You then have the problem.clean.ts file to practise implementing. There is a file with a working solution too. The test cases are all written for you. 
```
src/
└── test-example/        # Example test structure
```

## Contributing
- If you want to contribute to this project feel free to fork it and request merge a PR 

#### License: MIT (Feel free to fork and learn)