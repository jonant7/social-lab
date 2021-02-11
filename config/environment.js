'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'social-lab',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

  // Your web app's Firebase configuration
   firebase: {
    apiKey: "AIzaSyD4gkDm6h0x_5TfkRGdOFLsrfDAvrZr-Hg",
    authDomain: "social-lab-c5b89.firebaseapp.com",
    databaseURL: "https://social-lab-c5b89-default-rtdb.firebaseio.com",
    projectId: "social-lab-c5b89",
    storageBucket: "social-lab-c5b89.appspot.com",
    messagingSenderId: "419820547798",
    appId: "1:419820547798:web:097ab99dad91aebff8e377"
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
