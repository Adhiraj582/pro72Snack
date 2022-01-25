import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAL9xtG63_kmcARttotUPI3UmEI4BxMowk",
 authDomain: "complaint-fourm.firebaseapp.com",
 projectId: "complaint-fourm",
 storageBucket: "complaint-fourm.appspot.com",
 messagingSenderId: "1026547552672",
 appId: "1:1026547552672:web:f3b299fb116307513214c5"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

