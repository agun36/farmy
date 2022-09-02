import { getAuth } from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js'

// Import the functions you need from the SDKs you need
import { getFirestore } from 'https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyClbsallLeLh-pddDwysmYSYer_6EmOOB8',
  authDomain: 'farmacy-c516f.firebaseapp.com',
  projectId: 'farmacy-c516f',
  storageBucket: 'farmacy-c516f.appspot.com',
  messagingSenderId: '21532162350',
  appId: '1:21532162350:web:5d4f07610d85569a39e2bf',
  measurementId: 'G-JTHDCCBT3B',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
// login area
