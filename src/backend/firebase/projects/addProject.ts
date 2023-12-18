import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import {
  addDoc,
  serverTimestamp,
  updateDoc,
  collection,
  doc,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
  orderBy,
} from "@firebase/firestore";

const projectCollection = collection(db, "projects");

export default async function addNewProject (selectedFile: any, data:any) {
  //Create post aond add to firestore
  //Get post ID
  //Upload the image with post ID
  //Get download URL
  
  try {
    const docRef = await addDoc(projectCollection, {
      dateCreated: serverTimestamp(),
      ...data
    });
  
    const imageRef = ref(storage, `projects/${docRef.id}`);
  
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
  
        await updateDoc(doc(db, "projects", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    
  }
};
