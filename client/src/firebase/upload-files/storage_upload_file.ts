import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHOBiXR_gnkaqRAJLKx0rsyePN73hMQ3s",
  authDomain: "photo-456c7.firebaseapp.com",
  projectId: "photo-456c7",
  storageBucket: "photo-456c7.appspot.com",
  messagingSenderId: "771122109648",
  appId: "1:771122109648:web:29946dfce8cb15141692d5",
  measurementId: "G-LHMT0QW23T"
};

initializeApp(firebaseConfig);
const storage = getStorage();

export const upload = async (file: File) => {
  const path = `images/${file.name}`;
  const storageRef = ref(storage, path);
  const metadata = {
    contentType: 'image/jpeg',
  };
  await uploadBytes(storageRef, file, metadata);
  return await getDownloadURL(ref(storage, path));
}