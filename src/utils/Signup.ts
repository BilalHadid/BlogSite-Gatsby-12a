import firebase from "gatsby-plugin-firebase";
import "firebase/auth";
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
