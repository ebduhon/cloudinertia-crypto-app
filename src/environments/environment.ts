// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    ciBusiness: {
      apiKey: 'AIzaSyBTnHHefFEmI6gImmiWt1J6l5SAPj2G1zc',
      authDomain: 'ci-business.firebaseapp.com',
      databaseURL: 'https://ci-business.firebaseio.com/',
      projectId: 'ci-business',
      storageBucket: 'gs://ci-business.appspot.com',
      messagingSenderId: '461601417742'
    },
    ciCrypto: {
      apiKey: 'AIzaSyBPuwQ0FMwibAaVHsQ5-bPJxy-29xwLunk',
      authDomain: 'ci-crypto.firebaseapp.com',
      databaseURL: 'https://ci-crypto.firebaseio.com/',
      projectId: 'ci-crypto',
      storageBucket: 'ci-crypto.appspot.com',
      messagingSenderId: '313876972422',
      googleFontsApiKey: 'AIzaSyAoWhBmX1LtkG82S4w4_0Cm0jLFZAwQplg'
    },
    ciCustomer: {
      apiKey: 'AIzaSyANYWaUb7nEvqS29zV2bGIivvv5_GhVpPU',
      authDomain: 'ci-customer.firebaseapp.com',
      databaseURL: 'https://ci-customer.firebaseio.com/',
      projectId: 'ci-customer',
      storageBucket: 'ci-customer.appspot.com',
      messagingSenderId: '86889055550'
    },
    ciFramework: {
      apiKey: 'AIzaSyBtnsPEKVGQbCEPdnPZp9-BuFXGADJvt_k',
      authDomain: 'ci-framework.firebaseapp.com',
      databaseURL: 'https://ci-framework.firebaseio.com',
      projectId: 'ci-framework',
      storageBucket: 'ci-framework.appspot.com',
      messagingSenderId: '460870910446'
    },
    ciMockDevelopment: {
      apiKey: 'AIzaSyBeVzVLIZmiElDsjkH-Cyp-6GKYHgssV7Q',
      authDomain: 'ci-mock-development.firebaseapp.com',
      databaseURL: 'https://ci-mock-development.firebaseio.com',
      projectId: 'ci-mock-development',
      storageBucket: 'ci-mock-development.appspot.com',
      messagingSenderId: '1093548897581'
    },
    cloudFunctionUrl: 'https://us-central1-ci-business.cloudfunctions.net'
  },
  cognito: {
    userPoolId: 'us-east-1_kpR91C5PA', // ci-user-pool-test-5
    clientId: '4nfa63jvililrqjct2a2gboukk', // ci-app-client-business
    identityPoolId: 'us-east-1:aae92a9b-f76b-464b-ae7a-bd41e3d1b6e2', // ci_app_identity_pool
    region: 'us-east-1',
  }
};
