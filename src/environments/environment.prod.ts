
export const environment = {
  production: true,
  firebase: {
    ciBusiness: {
      apiKey: 'AIzaSyBTnHHefFEmI6gImmiWt1J6l5SAPj2G1zc',
      authDomain: 'ci-business.firebaseapp.com',
      databaseURL: 'https://ci-business.firebaseio.com/',
      projectId: 'ci-business',
      storageBucket: 'gs://ci-business.appspot.com',
      messagingSenderId: '461601417742'
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

