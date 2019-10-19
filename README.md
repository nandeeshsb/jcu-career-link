# JCU Career Link

## Node Package Manager

This project uses [npm](https://npmjs.org) to manage core dependencies. npm can be installed in Windows along with [Node.js](https://nodejs.org).

To get started in project development, run `npm i` to install all required node modules. After all modules are installed, the project will build itself and be served on http://localhost:3000.

## Git for Windows

To avoid any npm runtime errors, set the default script shell to bash:

```$ npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"```

## Dependencies

### Core

* Bootstrap
* Firebase

### Development

* Autoprefixer
* Browsersync
* Concurrently
* ESLint
* imagemin
* node-sass
* onchange
* PostCSS
* Prettier
* UglifyJS

**Note:** If using Visual Studio Code, install the ESLint and Prettier extensions to enable linting and code formatting. This project includes an `.eslintrc.json` file to configure Prettier as the primary formatting tool instead of ESLint's built-in variant. This configuration also enforces the Airbnb JS style guide.