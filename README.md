# Lithium Community LIA React Native Example

### Getting started

> Both project directories should be at the same level in a directory. Do not rename the folders.

#### Build and publish the core SDK

1. clone [lia-sdk-core-js](https://github.com/lithiumtech/lia-sdk-core-js)
1. navigate into `lia-sdk-core-js` directory
1. run the following the in the terminal
    1. `npm install`
    1. `npm run build`
    1. `npm link`

#### Setup and build the example application

1. [Install Android Studio](https://developer.android.com/studio/index.html)
1. clone [lia-react-native-example](https://github.com/lithiumtech/lia-react-native-example)
1. navigate into `lia-react-native-example` directory
1. run the following the in the terminal
    1. `brew install node`
    1. `brew install watchman`
    1. `sudo npm install -g react-native-cli`
1. navigate into the project directory
1. run the following the in the terminal
    1. `npm link lia-sdk-core`
1. connect an Android device with USB debugging enabled
1. run the following the in the terminal
    1. `react-native start --config ../../../../rn-cli.config.js --reset-cache`
    1. `react-native run-android`

> The API calls will fail because the `access token` would have expired.

> Contact Dev-Triumph@lithium.com for more info.