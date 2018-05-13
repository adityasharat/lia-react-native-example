import * as SDK from 'lia-sdk-core';

export default class SdkManager {

  static instance = null;

  static initialize(credentials, localstorage = {}) {
    if (SdkManager.instance === null) {
      SdkManager.instance = SDK.builder.build(credentials, localstorage);
    }
  }

  static get() {
    return SdkManager.instance;
  }
}