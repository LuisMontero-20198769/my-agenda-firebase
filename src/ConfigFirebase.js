import firebase from 'firebase/app';
import 'firebase/firestore';

const fireConfig = {
    apiKey: "AIzaSyBCl_nHLUMp1RanKwlrrflz2-rPBiiI7_E",
    authDomain: "agenda-servicios-web.firebaseapp.com",
    projectId: "agenda-servicios-web",
    storageBucket: "agenda-servicios-web.appspot.com",
    messagingSenderId: "366591789611",
    appId: "1:366591789611:web:9c6b4963c6b5fdf2f4b86e"
};
firebase.initializeApp(fireConfig);

export const baseDatos = firebase.firestore();
export default firebase;
