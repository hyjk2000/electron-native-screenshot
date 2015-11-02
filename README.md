# electron-native-screenshot
Demo Electron app for native screenshot for Windows

## Requirements
1. Windows
2. [Node.js][node-js-website], x86 recommended
3. Make sure you've installed all the [necessary build tools][build-tools]

## Usage
1. Clone the repository
2. Run `npm install`
3. [Run the app in Electron][run-in-electron]

## Native Node Module Compatibility
[`node-ffi`][node-ffi-github] is used for loading and calling the native screenshot library. In case of any incompatibility with Electron, please consult [this page][electron-native-modules].

[node-js-website]: https://nodejs.org/
[build-tools]: https://github.com/nodejs/node-gyp#installation
[run-in-electron]: http://electron.atom.io/docs/latest/tutorial/quick-start/#run-your-app
[node-ffi-github]: https://github.com/node-ffi/node-ffi
[electron-native-modules]: http://electron.atom.io/docs/latest/tutorial/using-native-node-modules/
