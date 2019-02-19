// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebaseConfig: {
    apiKey: "AIzaSyCz0Fn5_EUKRGda7OSn7gw_ZZhzPDK05Dg",
    authDomain: "todo-15f8e.firebaseapp.com",
    databaseURL: "https://todo-15f8e.firebaseio.com",
    projectId: "todo-15f8e",
    storageBucket: "todo-15f8e.appspot.com",
    messagingSenderId: "862093953681"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
