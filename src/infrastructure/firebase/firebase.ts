import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import serviceAccount from './chave/hubisp-firebase-adminsdk-fbsvc-826bf254dd.json';

export const firebaseApp = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

export const messaging = getMessaging(firebaseApp);