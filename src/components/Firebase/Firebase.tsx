import { firebaseConfigDevelopment } from "./firebase.config";
import app from "firebase/app";

let created = false;

const useFirebase = () => {
  if (!created) {
    app.initializeApp(firebaseConfigDevelopment);
    created = true;
    return app;
  }
  throw new Error("You can not instantiate second Firebase connection");
};

export default useFirebase;
