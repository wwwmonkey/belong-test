# Belong technical task

The aim is to demonstrate how you approach thinking about problems and translating them to code.

As such, this project is far from production ready, but should allow for a preview of my code style and technique at the moment of it's publishing.

## Cell Simulator

Create a repository to your own, spend your allocated time working on a solution and then submit it back to us. Please include a README with installation and usage instructions.

Challenge: Cell Simulator

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Cell Simulator by creating an initial configuration and observing how it evolves.

## Acceptance criteria

- [x] At initial state, User should see an empty board.

- [x] User can make Cells "alive".

- [x] User can make Cells "dead".

- [x] User can trigger "next generation".

- [x] User can trigger a "reset" to the initial state.

## Next generation

- When the next generation is running:

  - [x] A Cell with fewer than two live neighbours dies of under-population.

  - [x] A Cell with 2 or 3 live neighbours lives on to the next generation.

  - [x] A Cell with more than 3 live neighbours dies of overcrowding.

  - [x] An empty Cell with exactly 3 live neighbours "comes to life".

  - [ ] A Cell who "comes to life" outside the board should wrap at the other side of the board. (I don't think my logic currently handles this scenario, with more time I would need to rethink and refactor)

- [x] Once the next generation is done, User can trigger "next generation" again.

## Requirements

- [x] Use React and TypeScript.

- [x] Please include some attempt at testing your code.

- [x] While not mandatory, a meaningful git history will be looked upon favourably.

## CRA default README follows

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
