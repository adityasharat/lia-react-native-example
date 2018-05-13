# Lithium Community LIA React Native Example

### Getting started

#### Build and publish the core SDK

1. clone [lia-sdk-core-js](https://github.com/lithiumtech/lia-sdk-core-js)
1. navigate into `lia-sdk-core-js` directory
1. run the following the in the terminal
    1. `npm install`
    1. `npm run build`
    1. `npm link`

#### Setup and build the example application

1. [Install Android Studio](https://developer.android.com/studio/index.html)
1. run the following the in the terminal
    1. `brew install node`
    1. `brew install watchman`
    1. `npm install -g react-native-cli`
1. navigate into the project directory
1. run he following the in the terminal
    1. `npm link lia-sdk-core`
1. connect an Android device with USB debugging enabled
1. run he following the in the terminal
    1. `react-native run-android`
1. the build will complete and fail. Let it!
1. stop the process and close the `metro-bundler` process (will open in a new terminal window)
1. `react-native start --config ../../../../rn-cli.config.js`

> The calls will fail because the access token would have expired.

> Contact Dev-Triumph@lithium.com for more info.