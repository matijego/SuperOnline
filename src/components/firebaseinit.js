
const app = Firebase.initializeApp(config);
import Firebase from 'firebase';
import 'firebase/firestore'
import config from './config';
export default app.firestore()