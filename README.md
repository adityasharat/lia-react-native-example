# Lithium Community LIA React Native Example

### Getting started

> Both project directories should be at the same level in a directory. Do not rename the folders.

> Do not rename the project directories.

#### Build and publish the core SDK

1. clone [lia-sdk-core-js](https://github.com/lithiumtech/lia-sdk-core-js)
1. navigate into `lia-sdk-core-js` directory
1. run the following the in the terminal
    1. `npm install`
    1. `npm run build`
    1. `npm link`

#### Setup and build the example application

1. [Install Android Studio](https://developer.android.com/studio/index.html)
1. ensure sure build tools version is `27.0.3` is available.
1. clone [lia-react-native-example](https://github.com/lithiumtech/lia-react-native-example)
1. navigate into `lia-react-native-example` directory
1. run the following the in the terminal
    1. `brew install node` (this is required to be done only once)
    1. `brew install watchman` (this is required to be done only once)
    1. `sudo npm install -g react-native-cli` (this is required to be done only once)
    1. `npm link lia-sdk-core`
    1. `npm install`

#### Running the react application

1. start an android emulator.
1. run the following the in the terminal (in different terminal tabs)
    1. `react-native start --config ../../../../rn-cli.config.js --reset-cache`
    1. `react-native run-android` or `react-native run-ios`

> Contact Dev-Triumph@lithium.com for more info.