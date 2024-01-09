import dotenv from "dotenv";
dotenv.config();

import * as admin from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


admin.initializeApp({
  credential: admin.applicationDefault()
});

const db = getFirestore();

export {db}
