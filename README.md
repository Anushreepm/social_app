# Blur Social App

## Prerequisites

-   Run `yarn global add lerna` to install Lerna globally

## Usage

-   Run `yarn bootstrap` to install all dependencies and setup monorepo syslinks using Lerna
-   Run `yarn start` to start the development server
-   To work on backend just cd into `backend` under `packages` directory and run `yarn install` to install all dependencies, then `yarn dev` to spur up development server
-   To work on frontend just cd into `client` under `packages` directory and run `yarn install` to install all dependencies, then `yarn dev` to spur up development server

## Rules

-   We use [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages) for better repository management

## Setup Explained

### Tooling

#### Lerna

-   Lerna for managing multiple packages in the Blur App monorepo
-   Common dependencies appear in root `package.json`
-   Running `yarn build` makes production-ready build of all pacakges
-   Run `yarn test` to test all packages

## Tech Stack

-   Frontend: Next.js, Styled Components for styling/theming
-   Backend: Apollo Server, Graphql, Next auth, MongoDB
