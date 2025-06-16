// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAihccBQjyZrEqssWWRscD_CVDZeg4WGE0",
  authDomain: "quiniela-mundial-c8e6f.firebaseapp.com",
  databaseURL: "https://quiniela-mundial-c8e6f-default-rtdb.firebaseio.com",
  projectId: "quiniela-mundial-c8e6f",
  storageBucket: "quiniela-mundial-c8e6f.firebasestorage.app",
  messagingSenderId: "289106224309",
  appId: "1:289106224309:web:1602659bf18a4ed0df8afc",
  measurementId: "G-9K40S3SSJ9"
};

// Inicialización segura
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Exporta el módulo de autenticación
const auth = firebase.auth();
