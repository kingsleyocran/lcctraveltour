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

const partnerCollection = collection(db, "partners");

export default async function addNewPartner (selectedFile: any, data:any) {
  //Create post aond add to firestore
  //Get post ID
  //Upload the image with post ID
  //Get download URL
  
  try {
    const docRef = await addDoc(partnerCollection, {
      dateCreated: serverTimestamp(),
      ...data
    });
  
    const imageRef = ref(storage, `partners/${docRef.id}`);
  
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
  
        await updateDoc(doc(db, "partners", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    
  }
};
