# JCU Career Link

## Geting Started

### Windows Development (preferred)

Install npm via [Node.js](https://nodejs.org).

**Note:** Confirm npm is installed by running `command -v npm`

[Git BASH](https://gitforwindows.org) (Git for Windows)

**Note:** To avoid any npm runtime errors, set the default script shell to bash:

```$ npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"```

Initialize the project by running:

```npm i```

If you are getting any npm errors, `npm cache clean --force` then `npm i` can help.

On postinstall, the webpack dev server should start serving content from http://localhost:8080.

## Environment Modes

### Development

Run `npm start` to start a local development server and live reloading of project files.

### Production

Build the project for production.

`npm run build`

## Dependencies

* Bootstrap
  * jQuery
  * Popper.js
* Firebase

**Note:** If using Visual Studio Code, install the ESLint and Prettier extensions to enable linting and code formatting. This project includes an `.eslintrc.json` file to configure Prettier as the primary formatting tool instead of ESLint's built-in variant. This configuration also enforces the Airbnb JS style guide.